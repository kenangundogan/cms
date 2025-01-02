
import { NextResponse } from 'next/server';

import { faker } from '@faker-js/faker';

// Fake tree data generator
const generateTreeData = (depth = 3, breadth = 2) => {
    const createNode = (level) => {
        if (level >= depth) return null;

        return Array.from({ length: breadth }).map(() => ({
            id: faker.string.uuid(),
            label: faker.lorem.word(),
            disabled: faker.datatype.boolean(),
            children: createNode(level + 1),
        }));
    };

    return createNode(0);
};

// API handler
export async function GET() {
    const data = generateTreeData(4, 12); // Generate tree data with 4 levels and 12 children per node
    return NextResponse.json(data);
}
