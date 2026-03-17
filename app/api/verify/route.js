import { NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '../../../lib/prisma';

export async function POST(request) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      registrationId 
    } = await request.json();

    // 1. Verify Signature
    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'placeholder_secret';
    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
    }

    // 2. Update Payment Status
    await prisma.payment.update({
      where: { razorpayOrderId: razorpay_order_id },
      data: {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: 'paid',
      },
    });

    // 3. Update Registration Status
    await prisma.registration.update({
      where: { id: registrationId },
      data: {
        paymentStatus: 'SUCCESS',
      },
    });

    return NextResponse.json({ status: 'ok' });

  } catch (error) {
    console.error('Verification Error:', error);
    return NextResponse.json({ 
      message: 'Verification failed',
      error: error.message 
    }, { status: 500 });
  }
}
