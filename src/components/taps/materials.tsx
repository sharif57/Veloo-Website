// // import React from 'react'
// // import {
// //     Table,
// //     TableBody,
// //     TableCell,
// //     TableHead,
// //     TableHeader,
// //     TableRow,
// // } from "@/components/ui/table"
// // import { useGetOfferQuery } from '@/redux/feature/chatSlice';



// // export default function Materials({id}) {

// //   const { data } = useGetOfferQuery(id);
// //       console.log(data?.bill_of_materials, 'my offers')

// // const invoices =[
// //   {
// //     "name": "Skruer",
// //     "type": "Material",
// //     "price": "$200",
// //     "description": "For fastening boards",
// //     "unit": "m2",
// //     "quantity": "25 m2",
// //     "location": "Lyngby 14",
// //     "status": "Ordred"
// //   },
// //   {
// //     "name": "Skruer",
// //     "type": "Material",
// //     "price": "$200",
// //     "description": "For fastening boards",
// //     "unit": "m2",
// //     "quantity": "25 m2",
// //     "location": "Lyngby 14",
// //     "status": "Accepted"
// //   },
// //   {
// //     "name": "Skruer",
// //     "type": "Material",
// //     "price": "$200",
// //     "description": "For fastening boards",
// //     "unit": "m2",
// //     "quantity": "25 m2",
// //     "location": "Lyngby 14",
// //     "status": "Ordred"
// //   },
// //   {
// //     "name": "Skruer",
// //     "type": "Material",
// //     "price": "$200",
// //     "description": "For fastening boards",
// //     "unit": "m2",
// //     "quantity": "25 m2",
// //     "location": "Lyngby 14",
// //     "status": "Accepted"
// //   }
// // ]

// //   return (
// //     <div>
// //        <Table className="border">
// //             <TableHeader className=''>
// //                 <TableRow className=''>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Category</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Material</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Prices</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Description</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Unit</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Quantity</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Delivery Address</TableHead>
// //                     <TableHead className="text-[#000000] text-lg font-medium">Status</TableHead>
// //                 </TableRow>
// //             </TableHeader>
// //             {/* <TableBody>
// //                 {invoices.map((invoice) => (
// //                     <TableRow key={invoice.name}>
// //                         <TableCell className="font-medium">{invoice.type}</TableCell>
// //                         <TableCell>{invoice.name}</TableCell>
// //                         <TableCell className="p-6">{invoice.price}</TableCell>
// //                         <TableCell className="p-6">{invoice.description}</TableCell>
// //                         <TableCell className="p-6">{invoice.unit}</TableCell>
// //                         <TableCell className="p-6">{invoice.quantity}</TableCell>
// //                         <TableCell className="p-6">{invoice.location}</TableCell>
// //                         <TableCell className="p-6">{invoice.status}</TableCell>
// //                     </TableRow>
// //                 ))}
// //             </TableBody> */}

// //         </Table>
// //     </div>
// //   )
// // }
// import React from 'react'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { useCustomerAcceptanceMutation, useCustomerCustomMutation, useCustomerEmailMutation, useGetOfferQuery, useSendEmailMutation } from '@/redux/feature/chatSlice';
// import { Button } from '../ui/button';
// import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Textarea } from '../ui/textarea';

// export default function Materials({ id }: any) {

//   const { data } = useGetOfferQuery(id);
//   console.log(data?.id, 'my offers')

//   const [customerEmail] = useCustomerEmailMutation();
//   const [customerAcceptance] = useCustomerAcceptanceMutation();
//   const [customerCustom] = useCustomerCustomMutation();

//   const [sendEmail] = useSendEmailMutation();

//   return (
//     <div>
//       <Table className="border">
//         <TableHeader>
//           <TableRow>
//             <TableHead className="text-[#000000] text-lg font-medium">Category</TableHead>
//             <TableHead className="text-[#000000] text-lg font-medium">Material</TableHead>
//             <TableHead className="text-[#000000] text-lg font-medium">Price</TableHead>
//             <TableHead className="text-[#000000] text-lg font-medium">Description</TableHead>
//             <TableHead className="text-[#000000] text-lg font-medium">Unit</TableHead>
//             <TableHead className="text-[#000000] text-lg font-medium">Quantity</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {data?.bill_of_materials?.map((item: any, index: number) => (
//             <TableRow key={index}>
//               <TableCell className="font-medium">{item.category}</TableCell>
//               <TableCell>{item.material}</TableCell>
//               <TableCell className="p-6">{item.price}</TableCell>
//               <TableCell className="p-6">{item.description}</TableCell>
//               <TableCell className="p-6">{item.unit}</TableCell>
//               <TableCell className="p-6">{item.quantity}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <div className='flex justify-center mt-4'>
//         <Dialog>
//           <form>
//             <DialogTrigger asChild>
//               <Button className='bg-[#059669] hover:bg-[#059669]/90 px-10 py-6'>Order Materials</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[525px]">
//               <DialogHeader>
//                 <DialogTitle className='text-4xl text-center font-medium text-[#4B5563]'>Talk to Customer</DialogTitle>
//               </DialogHeader>
//               <div className="grid gap-4 py-2">
//                 <Button type="submit" className='w-full py-6 bg-[#D1FAE5] text-lg font-semibold hover:bg-[#D1FAE5]/90 text-[#047857]'>Send offer to customer</Button>
//                 <Button type="submit" className='w-full py-6 bg-[#D1FAE5] text-lg font-semibold hover:bg-[#D1FAE5]/90 text-[#047857]'>Send a thank you for acceptance mail</Button>
//                 <Button type="submit" className='w-full py-6 bg-[#D1FAE5] text-lg font-semibold hover:bg-[#D1FAE5]/90 text-[#047857]'>Send custom email</Button>
//               </div>
//             </DialogContent>
//           </form>
//         </Dialog>

//         <Dialog>
//           <form>
//             <DialogTrigger asChild>
//               <Button variant="outline">Open Dialog</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>Edit profile</DialogTitle>
//                 <DialogDescription>
//                   Make changes to your profile here. Click save when you&apos;re
//                   done.
//                 </DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4">
//                 <div className="grid gap-3">
//                   <Label htmlFor="name-1">Client's Name</Label>
//                   <Input id="name-1" name="name" placeholder="Enter Client's Name" />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="username-1">Client's Email Address</Label>
//                   <Input id="username-1" name="username" placeholder="Enter Client's Email Address" />
//                 </div>
//                 <div className="grid gap-3">
//                   <Label htmlFor="username-1">Generated Confirmation Email</Label>
//                   <Textarea id="username-1" name="username" placeholder="Enter Client's Email Address" />
//                 </div>
//               </div>
//               <DialogFooter className='flex justify-between'>
//                 <DialogClose asChild>
//                   <Button variant="outline" className=''>Cancel</Button>
//                 </DialogClose>
//                 <Button type="submit">Send</Button>
//               </DialogFooter>
//             </DialogContent>
//           </form>
//         </Dialog>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  useCustomerAcceptanceMutation,
  useCustomerCustomMutation,
  useCustomerEmailMutation,
  useGetOfferQuery,
  useSendEmailMutation,
} from '@/redux/feature/chatSlice';
import { toast } from 'sonner';

export default function Materials({ id }: { id: string }) {
  const { data } = useGetOfferQuery(id);

  // Mutations
  const [customerEmail, { isLoading: emailLoading }] = useCustomerEmailMutation();
  const [customerAcceptance, { isLoading: acceptLoading }] = useCustomerAcceptanceMutation();
  const [customerCustom, { isLoading: customLoading }] = useCustomerCustomMutation();
  const [sendEmail, { isLoading: sendingFinal }] = useSendEmailMutation();

  // Second Modal State
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [customerName, setCustomerName] = useState(''); // optional, for display

  // Common handler for all three email generate buttons
  const handleGenerateEmail = async (
    mutationFn: any,
    actionName: string
  ) => {
    try {
      const res = await mutationFn({ offer_id: id }).unwrap();

      setCustomerName(res.customer_name || '');
      setToEmail(res.customer_email || res.to || ''); // fallback
      setSubject(res.email_subject || '');
      setBody(res.email_body || '');

      setSecondModalOpen(true); // open second modal
    } catch (err: any) {
      console.error('Generate Email Error:', err);
      toast.error(err?.data?.message || 'Failed to generate email. Please try again.');
    }
  };

  // Final Send Email
  const handleSendFinalEmail = async () => {
    if (!toEmail || !subject || !body) {
      alert('Please fill all fields');
      return;
    }

    try {
      await sendEmail({
        to: toEmail,
        subject: subject,
        body: body,
      }).unwrap();

      toast.success('Email sent successfully!');
      setSecondModalOpen(false);
    } catch (err: any) {
      console.error('Send Email Error:', err);
      toast.error(err?.data?.message || 'Failed to send email');
    }
  };

  return (
    <div>
      {/* Table */}
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
          {data?.bill_of_materials?.map((item: any, index: number) => (
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

      {/* First Dialog - Choose Action */}
      <div className="flex justify-center mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#059669] hover:bg-[#059669]/90 px-10 py-6 text-lg">
              Order Materials
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-4xl text-center font-medium text-[#4B5563]">
                Talk to Customer
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <Button
                disabled={emailLoading}
                onClick={() => handleGenerateEmail(customerEmail, 'offer')}
                className="w-full py-6 bg-[#D1FAE5] text-lg font-semibold hover:bg-[#D1FAE5]/90 text-[#047857]"
              >
                {emailLoading ? 'Generating...' : 'Send offer to customer'}
              </Button>

              <Button
                disabled={acceptLoading}
                onClick={() => handleGenerateEmail(customerAcceptance, 'acceptance')}
                className="w-full py-6 bg-[#D1FAE5] text-lg font-semibold hover:bg-[#D1FAE5]/90 text-[#047857]"
              >
                {acceptLoading ? 'Generating...' : 'Send a thank you for acceptance mail'}
              </Button>

              <Button
                disabled={customLoading}
                onClick={() => handleGenerateEmail(customerCustom, 'custom')}
                className="w-full py-6 bg-[#D1FAE5] text-lg font-semibold hover:bg-[#D1FAE5]/90 text-[#047857]"
              >
                {customLoading ? 'Generating...' : 'Send custom email'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Second Dialog - Edit & Send Email */}
      <Dialog open={secondModalOpen} onOpenChange={setSecondModalOpen}>
        <DialogContent className="sm:max-w-[600px] ">
          <DialogHeader>
            <DialogTitle className="text-2xl">Review & Send Email</DialogTitle>
            <DialogDescription>
              To: <strong>{customerName}</strong> ({toEmail})
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>To (Email)</Label>
              <Input
                value={toEmail}
                onChange={(e) => setToEmail(e.target.value)}
                placeholder="client@example.com"
              />
            </div>

            <div className="grid gap-2">
              <Label>Subject</Label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject"
              />
            </div>

            <div className="grid gap-2">
              <Label>Email Body</Label>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={12}
                className="font-mono text-sm resize-none h-[225px] overflow-y-scroll"
                placeholder="Email content..."
              />
            </div>
          </div>

          <DialogFooter className="flex justify-between sm:justify-between">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={handleSendFinalEmail}
              disabled={sendingFinal || !toEmail || !subject || !body}
              className="bg-[#059669] hover:bg-[#059669]/90"
            >
              {sendingFinal ? 'Sending...' : 'Send Email'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}