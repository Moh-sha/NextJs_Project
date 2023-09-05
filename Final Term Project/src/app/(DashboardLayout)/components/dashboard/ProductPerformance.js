

import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard'; // Make sure to provide the correct path to DashboardCard

const products = [
    // ... (your product data)
];

const ProductPerformance = () => {
    return (
        <DashboardCard title="Product Performance">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    {/* TableHead */}
                    <TableHead>
                        <TableRow>
                            {/* ... (table header cells) */}
                        </TableRow>
                    </TableHead>
                    {/* TableBody */}
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                {/* ... (table cells for each product) */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
