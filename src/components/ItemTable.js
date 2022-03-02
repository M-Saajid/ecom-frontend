import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

function ItemTable() {
    const [itemDetail, setitemDetail] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get("http://localhost:5000/api/items");
        setitemDetail(request.data.data.foundItems);
        return request;
      }
      fetchData();
    }, []);

    const data = 
   
        itemDetail.map((item)=>{
            return[
                 {
                    id: item._id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    quantity: item.quantity,
                    category: item.category
                }

            ]
        })

//    const data=    [{
//         id: 123,
//         title: "12",
//         description: "sdfsdfsdfsdfsdf",
//         price: 1023,
//         rating: 5,
//         quantity: 1,
//         category: "T shirt"
//     }]
        console.log(data)
        
    

  const columns = [
    { title: "Id", field: "id" },
    { title: "Image", field: "image" },
    { title: "Title", field: "title" },
    { title: "Description", field: "description" },
    { title: "Price", field: "price" },
    { title: "Rating", field: "rating" },
    { title: "Quantity", field: "quantity" },
    { title: "Category", field: "category" }
  ];
  return (
    <div>
      <MaterialTable
        title="Product item table"
        data={itemDetail.map((_,i)=>(data[i])) }
        columns={columns}
        options={{ paging: false, exportButton: true }}
      />
    </div>
  );
}

export default ItemTable;
