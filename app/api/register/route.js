import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '../../../lib/prisma';
import { supabase } from '../../../lib/supabase';

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('--- Registration Attempt (Supabase) ---');
    
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const registrationId = crypto.randomUUID();
    const timestamp = Date.now();
    let finalFileName = data.fileName;
    let photoUrl = null;

    // 1. Rename and Upload to Supabase Storage if file is present
    if (data.fileData && data.fileName) {
      try {
        const bucketName = process.env.SUPABASE_BUCKET_NAME || 'registrations';
        const safeName = data.fileName.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
        finalFileName = `${registrationId}_${timestamp}_${safeName}`;
        
        // Extract base64 data (e.g., data:image/png;base64,...)
        const base64Data = data.fileData.split(';base64,').pop();
        const buffer = Buffer.from(base64Data, 'base64');
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(finalFileName, buffer, {
            contentType: data.fileData.match(/data:([^;]+);/)?.[1] || 'image/jpeg',
            upsert: true
          });

        if (uploadError) throw uploadError;

        // Get Public URL
        const { data: { publicUrl } } = supabase.storage
          .from(bucketName)
          .getPublicUrl(finalFileName);
        
        photoUrl = publicUrl;
        console.log(`File uploaded to Supabase: ${photoUrl}`);
      } catch (fileError) {
        console.error('Supabase Storage Error:', fileError);
        // Continue with registration even if photo upload fails, but it's not ideal
      }
    }

    // 2. Create Registration Record in Database
    console.log('Creating Prisma registration record...');
    const registration = await prisma.registration.create({
      data: {
        id: registrationId,
        registrantType: data.registrantType || 'Single',
        name: data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        addressLine1: data.addressLine1,
        country: data.country,
        state: data.state,
        city: data.city,
        zipCode: data.zipCode,
        company: data.company,
        designation: data.designation,
        sector: data.sector,
        collegeName: data.collegeName,
        teamSize: data.teamSize ? parseInt(data.teamSize) : 1,
        memberNames: Array.isArray(data.memberNames) ? data.memberNames : [],
        participationType: data.participationType,
        fileName: finalFileName,
        fileData: photoUrl, // Store the Supabase URL in this field
      },
    });

    return NextResponse.json({
      registrationId: registration.id,
      success: true
    });

  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ 
      message: 'Registration initialization failed',
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
