module.exports = [
"[project]/app/api/register/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function POST(request) {
    try {
        const data = await request.json();
        console.log('--- Registration Attempt (Supabase) ---');
        if (!data.name || !data.email || !data.phone) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Missing required fields'
            }, {
                status: 400
            });
        }
        const registrationId = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
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
                const { data: uploadData, error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucketName).upload(finalFileName, buffer, {
                    contentType: data.fileData.match(/data:([^;]+);/)?.[1] || 'image/jpeg',
                    upsert: true
                });
                if (uploadError) throw uploadError;
                // Get Public URL
                const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].storage.from(bucketName).getPublicUrl(finalFileName);
                photoUrl = publicUrl;
                console.log(`File uploaded to Supabase: ${photoUrl}`);
            } catch (fileError) {
                console.error('Supabase Storage Error:', fileError);
            // Continue with registration even if photo upload fails, but it's not ideal
            }
        }
        // 2. Create Registration Record in Database
        console.log('Creating Prisma registration record...');
        const registration = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].registration.create({
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
                fileData: photoUrl
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            registrationId: registration.id,
            success: true
        });
    } catch (error) {
        console.error('Registration Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Registration initialization failed',
            error: error.message,
            stack: error.stack
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=app_api_register_route_47adfe6f.js.map