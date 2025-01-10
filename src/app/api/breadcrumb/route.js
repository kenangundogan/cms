// src/app/api/breadcrumb/route.js

import { NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function GET() {
    const breadcrumb = [];
    const depth = faker.number.int({ min: 2, max: 5 });

    for (let i = 0; i < depth; i++) {
        breadcrumb.push({
            label: faker.commerce.department(),
            href: i === 0 ? '/' : `/${faker.helpers.slugify(breadcrumb[i - 1].label.toLowerCase())}`,
        });
    }

    return NextResponse.json({ breadcrumb });
}
