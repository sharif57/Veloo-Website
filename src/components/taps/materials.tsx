// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { useGetOfferQuery } from '@/redux/feature/chatSlice';



// export default function Materials({id}) {

//   const { data } = useGetOfferQuery(id);
//       console.log(data?.bill_of_materials, 'my offers')

// const invoices =[
//   {
//     "name": "Skruer",
//     "type": "Material",
//     "price": "$200",
//     "description": "For fastening boards",
//     "unit": "m2",
//     "quantity": "25 m2",
//     "location": "Lyngby 14",
//     "status": "Ordred"
//   },
//   {
//     "name": "Skruer",
//     "type": "Material",
//     "price": "$200",
//     "description": "For fastening boards",
//     "unit": "m2",
//     "quantity": "25 m2",
//     "location": "Lyngby 14",
//     "status": "Accepted"
//   },
//   {
//     "name": "Skruer",
//     "type": "Material",
//     "price": "$200",
//     "description": "For fastening boards",
//     "unit": "m2",
//     "quantity": "25 m2",
//     "location": "Lyngby 14",
//     "status": "Ordred"
//   },
//   {
//     "name": "Skruer",
//     "type": "Material",
//     "price": "$200",
//     "description": "For fastening boards",
//     "unit": "m2",
//     "quantity": "25 m2",
//     "location": "Lyngby 14",
//     "status": "Accepted"
//   }
// ]

//   return (
//     <div>
//        <Table className="border">
//             <TableHeader className=''>
//                 <TableRow className=''>
//                     <TableHead className="text-[#000000] text-lg font-medium">Category</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Material</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Prices</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Description</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Unit</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Quantity</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Delivery Address</TableHead>
//                     <TableHead className="text-[#000000] text-lg font-medium">Status</TableHead>
//                 </TableRow>
//             </TableHeader>
//             {/* <TableBody>
//                 {invoices.map((invoice) => (
//                     <TableRow key={invoice.name}>
//                         <TableCell className="font-medium">{invoice.type}</TableCell>
//                         <TableCell>{invoice.name}</TableCell>
//                         <TableCell className="p-6">{invoice.price}</TableCell>
//                         <TableCell className="p-6">{invoice.description}</TableCell>
//                         <TableCell className="p-6">{invoice.unit}</TableCell>
//                         <TableCell className="p-6">{invoice.quantity}</TableCell>
//                         <TableCell className="p-6">{invoice.location}</TableCell>
//                         <TableCell className="p-6">{invoice.status}</TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody> */}
           
//         </Table>
//     </div>
//   )
// }
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetOfferQuery } from '@/redux/feature/chatSlice';

export default function Materials({ id }) {

  const { data } = useGetOfferQuery(id);
  console.log(data, 'my offers')

  return (
    <div>
       <Table className="border">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-[#000000] text-lg font-medium">Category</TableHead>
                    <TableHead className="text-[#000000] text-lg font-medium">Material</TableHead>
                    <TableHead className="text-[#000000] text-lg font-medium">Price</TableHead>
                    <TableHead className="text-[#000000] text-lg font-medium">Description</TableHead>
                    <TableHead className="text-[#000000] text-lg font-medium">Unit</TableHead>
                    <TableHead className="text-[#000000] text-lg font-medium">Quantity</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {data?.bill_of_materials?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.material}</TableCell>
                        <TableCell className="p-6">{item.price}</TableCell>
                        <TableCell className="p-6">{item.description}</TableCell>
                        <TableCell className="p-6">{item.unit}</TableCell>
                        <TableCell className="p-6">{item.quantity}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}
