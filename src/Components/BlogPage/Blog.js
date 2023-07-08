import React from 'react';
import styles from "./style.module.css";
import Footer from '../Footer';

const blogcontent ={
  tags:["Health"],
  title:"The Truth About Smoking: It's Not Just Bad for Your Lungs",
  metatitle:"There is no safe level of smoking. Even secondhand smoke can be harmful.",
  image:"https://cdn.pixabay.com/photo/2019/06/14/13/16/cigarette-4273574_1280.jpg",
  content:[{
    title:"Introduction",
    description:"Smoking is one of the leading causes of preventable deaths worldwide. It is a habit that affects not only the smoker but also those around them. Smoking can cause a wide range of health problems, from respiratory issues to heart disease and cancer. In this blog post, we will explore what smoking does to your body.",
  },{
    title:"Respiratory System",
    description:"Smoking can cause significant damage to your respiratory system. It can lead to chronic bronchitis, emphysema, and lung cancer. Smoking causes inflammation in the airways, which can make it difficult to breathe. It can also damage the cilia, which are small hair-like structures that line the airways and help to clear mucus and dirt from the lungs. This can lead to a buildup of mucus and increase the risk of infection.",
  },{
    title:"Reproductive System",
    description:"Smoking can also affect the reproductive system. It can reduce fertility in both men and women. In women, smoking can lead to complications during pregnancy, such as premature birth, low birth weight, and stillbirth. It can also increase the risk of ectopic pregnancy and miscarriage. In men, smoking can reduce sperm count and motility, which can make it more difficult to conceive. ",
  },{
    title:"Cancer",
    description:"Smoking is one of the leading causes of cancer worldwide. It can increase the risk of lung cancer, throat cancer, mouth cancer, bladder cancer, and many other types of cancer. Smoking causes mutations in the DNA, which can lead to the growth of abnormal cells and the development of cancer. ",
    image:"https://cdn.pixabay.com/photo/2012/04/24/13/11/asbestos-39996_640.png"
  },{
    title:"Conclusion",
    description:"In conclusion, smoking can cause significant damage to your body. It can lead to respiratory issues, heart disease, reproductive problems, and cancer. Quitting smoking is one of the best things you can do for your health. It can reduce your risk of developing these health problems and improve your overall quality of life. If you are struggling to quit smoking, talk to your doctor or a smoking cessation specialist for help. "
  }]
}

function Blog() {
  return (
    <>
    <div className="mx-auto max-w-2xl px-3 pb-5 pt-3 sm:px-5 sm:pt-4 lg:max-w-7xl lg:px-7 ">
    {/* Tags  */}
      <div className='flex flex-row mb-2'>
        {
          blogcontent.tags.map((tag,index)=>{
              return <p key={index} className={`pe-2 text-purple-600 font-semibold	text-lg	`}
                      > {tag} </p>
          })
        }
      </div>

        {/* TITLE */}
        <div className={`text-5xl w-5/6 pb-1 font-bold	${styles.title}`}>
          {blogcontent.title}
        </div>

        {/* Metatitle */}
        <div className={` text-lg pt-2 ps-1 w-5/6 text-slate-800		 `}>
          {blogcontent.metatitle}
        </div>

        {/* Cover image */}
        <img src={blogcontent.image} alt="blog images" className='object-cover rounded-lg sm:max-h-96 btn- w-9/12 m-6 ms-1 h-full'/>

        {/* Content --> combination of text , images(optional), title */}
        {
          blogcontent.content.map((block,index)=>{
              return <div className='px-2 pt-5 w-11/12'>
                        <div className={`text-3xl w-5/6 mb-1 ps-2 font-bold ${styles.contentTitle}`}>
                            {block.title}
                        </div>
                        { 
                            block.image && 
                              <img src={block.image} alt="blog images"
                                 className='py-3'
                               />
                          }
                      
                        <div className='text-xl font-medium	ps-2'>
                          {block.description}
                        </div>

                     </div>
          })

        }
    </div>
        <Footer/>
    </>
  )
}

export default Blog;
