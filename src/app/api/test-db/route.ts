import { NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export async function GET() {
  try {
    const pool = await getConnection();

    // Simple test query to ensure connection is working
    const result = await pool.request().query('SELECT 1 as test');

    return NextResponse.json(
      {
        status: 'success',
        message: 'Successfully connected to MSSQL database',
        data: result.recordset
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API DB Test Error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to connect to the database',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
