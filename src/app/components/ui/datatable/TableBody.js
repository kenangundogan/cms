// src/app/components/ui/datatable/TableBody.js
export default function TableBody({ items, columns }) {
    return (
        <tbody data-type="Tbody">
            {items.length > 0 ? (
                items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 *:py-4 *:px-6 *:border-b *:border-r *:last:border-b-0">
                        {columns.map((column) => (
                            <td key={column.field} className="last:border-r-0">
                                {column.render
                                    ? column.render(item[column.field], item)
                                    : item[column.field] ?? "-"}
                            </td>
                        ))}
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={columns.length} className="text-center py-4">
                        Veri bulunamadı.
                    </td>
                </tr>
            )}
        </tbody>
    );
}
