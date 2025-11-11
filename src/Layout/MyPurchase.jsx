import React, { useContext, useEffect, useState } from 'react';
import PurchaseCard from '../Component/PurchaseCard';
import { AunthContext } from '../Auth/AuthProvider';

const MyPurchase = () => {
  const {user} = useContext(AunthContext);
  console.log(user.email);
  const [purchases, setPurchase] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/allpurchase`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  console.log(purchases);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto my-20'>
      {purchases.map((purchase) => (
        <PurchaseCard key={purchase.id} purchase={purchase} />
      ))}
    </div>
  );
};

export default MyPurchase;
