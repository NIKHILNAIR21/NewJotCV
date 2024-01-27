import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import check from "../../assets/checkmark.svg";
import { getSubscription,createPayment } from "../../services/ApiServices";
import { getToken } from "../../session";
import Loader from "../loader";
import logo from "../../assets/newlogo.png"
const PriceCard = ({ loginclick }) => {
  const [plans, setPlans] = useState([]);
  const [loading,setIsLoading]=useState(true)
const navigate = useNavigate()

  const handleCreateOrder = async (id) => {
    setIsLoading(true)
    const response = await createPayment(id)
    if(response.status ===201){
      try{
        displayRazorPay(response?.data?.data)
      }catch(error){
     
      }finally{
        setIsLoading(false)
      }
    }else{
      setIsLoading(true)
    }
  }

 const loadScript=(src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorPay = async(data)=>{
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"

    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    var options = {
      "key": import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "JotCV", //your business name
      "description": data?.description,
      "image": logo,
      "order_id": data?.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        navigate("/confirmation");
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": data?.name, //your customer's name
          "email": data?.email,
          "contact": data?.mobile //Provide the customer's phone number for better conversion rates 
      },

      "theme": {
          "color": "#0B7EFF"
      }
  }
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  }




  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await getSubscription();

      if (response?.data?.status == 200) {
        setIsLoading(false)
        setPlans(response?.data?.data);
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    }
  };

  return (
  <>
  <div className="flex justify-center gap-y-8 gap-x-7 w-full flex-wrap">

  <div className={loading?"h-screen bg-blue-100 opacity-40 relative z-50":""}>
  {loading && <Loader bg={true}/>}
  </div>

      {plans?.map((plan) => (
        <div
          key={plan?.id}
          // flex flex-col  items-center gap-y-1 px-3 py-3 w-96 bg-gradient-to-t h-[34rem] shadow-2xl transition duration-150 delay-100 hover:scale-110 rounded-xl
          className={
            (plan?.title === "15 Days" &&
              " flex flex-col bg-white font-poppins  gap-y-1 px-3 py-3 w-[22rem] bg-gradient-to-t h-[32rem] hover:shadow-xl transition duration-150 delay-100 hover:scale-110 border-t-4 hover:shadow-gray-300  border-t-slate-500 rounded-xl") ||
            (plan?.title === "1 Month" &&
              "flex flex-col bg-white  font-poppins gap-y-1 px-3 py-3 w-[22rem] bg-gradient-to-t h-[32rem] hover:shadow-xl transition duration-150 delay-100 hover:scale-110 border-t-4 hover:shadow-orange-300  border-t-orange-500 rounded-xl") ||
            (plan?.title === "3 Months" &&
              "flex flex-col bg-white font-poppins relative gap-y-1 px-3 py-3 w-[22rem] bg-gradient-to-t h-[32rem] hover:shadow-xl transition duration-150 delay-100 hover:scale-110 hover:shadow-green-300 border-t-4 border-t-green-500 rounded-xl")
          }
        >
          {plan?.title === "Premium" && (
            <p className=" absolute right-3 font-poppins p-1 bg-green-600 font-[500] text-white rounded-l-full rounded-r-full  text-right text-[10px]">
              Most Popular
            </p>
          )}
          <div className="">
            <h1 className="text-center  text-[1.7rem] pl-3 font-semibold  font-poppins ">
              {plan.title}
            </h1>
          </div>
          <div className="flex gap-x-2 pl-3  justify-center items-end mt-4">
            {plan.title != "15 Days" ? (
              <p className="text-2xl  font-bold font-poppins ">
                &#8377;{plan?.amount}
              </p>
            ) : (
              <p className="text-2xl  font-bold font-poppins">
                &#8377;{plan?.amount}
              </p>
            )}
            {plan?.title !== "7 Days" && (
              <span className="font-poppins text-base font-semibold">
                {/* /{plan.months} months */}
              </span>
            )}
          </div>
          <div>
            <ul className=" font-poppins w-full px-3 pt-4 flex flex-col gap-y-1 ">
              {plan?.features?.map((feature, index) => (
                <li
                  className="flex capitalize text-base py-1.5 font-poppins font-medium text-justify items-start justify-start"
                  key={index}
                >
                  <span className="px-2">
                    <img className="max-w-[18px] " src={check} alt="" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        
          <div className=" w-fit mx-auto">
            {plan?.activation?.activated === true ? (
              <button className="p-2 text-lg bg-pink-500 font-poppins rounded-md text-white">
                Current plan
              </button>
            ) : (
              <button
                onClick={() => {
                  if (getToken()) {
                    // navigate(`/choose-payment?plan=${plan?.id}`);
                    handleCreateOrder(plan?.id)
                   
                  } else {
                    loginclick();
                  }
                }}
                className="px-6 font-poppins  py-2 text-base font-semibold  bg-sky-600 rounded-md text-white"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      ))}
      
    </div>
    
  </>
    
  );
};

export default PriceCard;
