import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-primary-light">
        <div className="text-center m-8" style={{ padding: "30px" }}>
          <h2 className=" mb-2" style={{fontSize:"40px",fontWeight:"bold",color:"#4c4c4c"}}>About Us</h2>
          <p className="text-lg text-gray-600">
            Welcome to TrendyCart, the ultimate destination for stylish and trendy girls' fashion. We are here to empower young women with confidence through our curated collection of clothing and accessories.
          </p>
        </div>

        <div className="section__container hero__container bg-primary-light">
          <div className="text-center shadow-lg p-6 bg-white rounded-lg items-center" style={{ margin: "20px", padding: "20px", borderRadius: "20px" }}>
            <h2 className="flex justify-center text-2xl font-semibold mb-2" style={{color:"#4c4c4c"}}>Our Mission</h2>
            <p className="text-gray-600">
              To inspire confidence and self-expression in girls through fashion that combines quality, style, and affordability.
            </p>
            <div className="flex justify-center">
              <img src="https://jobinsighter.com/wp-content/uploads/2020/12/Getty_612495778-6.jpg" alt="Our Mission" className="mt-4 w-full rounded-lg" style={{ width: "450px", height: "300px",marginTop:"30px" }} />
            </div>
          </div>

          <div className="text-center shadow-lg p-6 bg-white rounded-lg" style={{ margin: "20px", padding: "20px", borderRadius: "20px" }}>
            <h2 className="text-2xl font-semibold mb-2" style={{color:"#4c4c4c"}}>Our Vision</h2>
            <p className="text-gray-600">
              To be the leading brand in girls' fashion, known for our commitment to quality, innovation, and customer satisfaction.
            </p>
            <div className="flex justify-center">
              <img src="https://th.bing.com/th/id/OIP.3yN8x6TMdwEPQXfFU543OgHaE8?rs=1&pid=ImgDetMain" alt="Our Vision" className="mt-4 w-full rounded-lg" style={{ width: "450px", height: "300px" ,marginTop:"30px"}} />
            </div>
          </div>

          <div className=" text-center shadow-lg p-6 bg-white rounded-lg" style={{ margin: "20px", padding: "20px", borderRadius: "20px" }}>
            <h2 className="text-2xl font-semibold mb-2" style={{color:"#4c4c4c"}}>Our Values</h2>
            <p className="text-gray-600">
              We celebrate individuality, creativity, and sustainability, ensuring every girl feels her best in our designs.
            </p>
            <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHZhbHVlc3xlbnwwfHx8fDE2ODc1MDMwMjU&ixlib=rb-1.2.1&q=80&w=600" alt="Our Values" className="mt-4 w-full rounded-lg" style={{ width: "450px", height: "300px" ,marginTop:"30px"}} />
          </div>

          <div className="text-center mt-8 bg-white rounded-lg" style={{ margin: "20px", padding: "20px" , borderRadius: "20px"}}>
            <h2 className="text-2xl font-semibold mb-2" style={{color:"#4c4c4c"}}>Our Story</h2>
            <p className="text-lg text-gray-600">
            TrendyCart has been a trailblazer in blending style with sustainability. Our journey is driven by innovation & desire to make every girl feel confident & beautiful.
            </p>
            <img src="https://packersshoppro.com/wp-content/uploads/2020/03/Boutique-Girls-Clothing.jpeg" alt="Our Story" className="mt-4 w-full rounded-lg" style={{ width: "450px", height: "300px",marginTop:"30px" }} />
          </div>

          <div className="text-center mt-8 bg-white rounded-lg" style={{ margin: "20px", padding: "20px", borderRadius: "20px" }}>
            <h2 className="text-2xl font-semibold mb-2" style={{color:"#4c4c4c"}}>What Sets Us Apart</h2>
            <p className="text-lg text-gray-600">
              We focus on quality craftsmanship, ethical sourcing and timeless designs. Our team works tirelessly to bring you collections that are fashionable and meaningful.
            </p>
            <img src="https://th.bing.com/th/id/OIP.Xg7BBcOn1hlD1hCK_gw22QHaE-?w=1600&h=1075&rs=1&pid=ImgDetMain" alt="What Sets Us Apart" className="mt-4 w-full rounded-lg" style={{ width: "450px", height: "300px",marginTop:"30px" }} />
          </div>

          <div className=" text-center shadow-lg p-6 bg-white rounded-lg" style={{ margin: "20px", padding: "20px", borderRadius: "20px" }}>
            <h2 className="text-2xl font-semibold mb-2" style={{color:"#4c4c4c"}}>Our Promise</h2>
            <p className="text-gray-600">
              From everyday essentials to statement pieces, our promise is to deliver fashion that reflects your personality and keeps you ahead of the trends.
            </p>
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb21pc2V8ZW58MHx8fHwxNjg3NTAzMDQ3&ixlib=rb-1.2.1&q=80&w=600" alt="Our Promise" className="mt-4 w-full rounded-lg" style={{ width: "450px", height: "300px",marginTop:"30px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
