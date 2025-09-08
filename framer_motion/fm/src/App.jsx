import './App.css'
import { motion, useScroll } from 'motion/react'

function App() {
  console.log(useScroll());
  const scrollYProgress = useScroll().scrollYProgress
  console.log(scrollYProgress);

  return (
    <div>
      {/* <motion.div className='box'
       animate={{ x:400, y:300 }}
       ></motion.div> */}

      {/* <motion.div className='box'
       animate={{ rotate:45 }}
       ></motion.div> */}

      {/* <motion.div className="box"
       animate={{
        x:1000,
        scale:0.5
       }}
       ></motion.div> */}

      {/* <motion.div className="box"
       animate={{
        x:1000,
        rotate:360
       }}
       transition={{
        delay:0.5,
        duration:3
       }}
       ></motion.div> */}

      {/* <motion.h1 
       initial={{
        x:100
       }}
       animate={{
        x:1000
       }}
       transition={{
        duration:3,
        repeat:3
       }}
       >Watch My Video On Youtube</motion.h1> */}

      {/* <motion.div className="box"
       initial={{
        x:20
       }}
       animate={{
        x:1000,rotate:360
       }}
       transition={{
        duration:2,
        delay:1,
        repeat:Infinity,
        ease:'anticipate'
       }}
       ></motion.div> */}

      {/* <motion.img src="https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597_640.png" 
       animate={{
        x:1000
       }}
       transition={{
        duration:3,
        ease:'linear'
       }}
       /> */}

      {/* <motion.div className="box"
       drag
       animate={{
        x:[0,800,800,0,0],
        // rotate:360,
        y:[0,0,400,400,0],
        rotate:[0,360,0,360,0,]
       }}
       transition={{
        duration:4,
        delay:1,
        // repeat:Infinity,
        ease:'anticipate'
       }}
       ></motion.div> */}

       {/* <motion.div className="box"
       drag
       whileDrag={{
        scale:0.9
       }}
       dragConstraints={{
        left:0,
        top:0,
        right:1000,
        bottom:0
       }}
      //  dragDirectionLock:true
       ></motion.div> */}

       <div className="p-50">
         <motion.div className='origin-left bg-red-500 w-full h-3 fixed top-0 left-0'
         style={{
          scaleX:scrollYProgress
         }}
         ></motion.div>
         <h2 className='text-4xl text-center m-10' >Aman Pandey Coding School</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quo ullam laboriosam harum aperiam commodi! Aut, similique, inventore pariatur ratione consectetur eos nulla optio culpa illum at quaerat nisi amet! <br />
         Magni, est debitis corrupti eius consectetur animi deserunt necessitatibus ducimus. Consectetur labore esse at velit magnam debitis blanditiis numquam deleniti id et, sint beatae, modi saepe facere doloremque quis eum? <br />
         Obcaecati ullam ipsum recusandae est, nostrum libero veritatis harum totam architecto tenetur, ad consectetur optio aspernatur maxime nisi non. Velit quas repellat ab eos aperiam quo soluta vero possimus nesciunt! <br />
         Vitae ratione debitis dolores voluptatem magnam obcaecati fuga rerum, error facere provident est cumque fugit nostrum maiores saepe nisi? Eveniet maxime soluta excepturi numquam explicabo. Maiores in non dolorem ad! <br />
         Eos iusto officia nulla nostrum aperiam vel obcaecati minus! Aliquam ut possimus laboriosam iste optio rem corporis veniam, eveniet ea asperiores nam, quasi quae, quisquam cumque commodi ullam voluptate sunt. <br />
         Provident molestias consequatur doloribus cupiditate, officia maxime, alias nesciunt temporibus dicta sit blanditiis mollitia voluptatem nemo nulla eos nisi numquam est non dolore facere. Saepe fugiat maiores nemo labore molestiae. <br />
         Facilis qui laboriosam, quasi recusandae minima ad aliquam deleniti. Iste asperiores recusandae, maxime temporibus id incidunt ab itaque debitis veniam libero repudiandae voluptatibus rerum nisi quos, numquam ullam consequatur dolor? <br />
         Soluta commodi est voluptates harum iure, ad nesciunt, consectetur itaque reiciendis exercitationem ullam corrupti. Deleniti adipisci commodi, porro, tenetur natus temporibus iste fugit, recusandae similique odio velit expedita cum sunt? <br />
         Odio quam qui autem porro dicta doloremque, dolore molestias veritatis, voluptatum, ipsa facere perferendis fugiat esse nemo asperiores. Culpa illo tenetur maiores at veniam accusamus nobis dignissimos atque voluptatem voluptatibus. <br />
         Nostrum labore ipsam facere porro numquam officia quas quos quam optio architecto cumque id nisi nobis distinctio, illo laboriosam libero. Nihil aperiam nulla nobis dolor corporis quos blanditiis non aliquam. <br />
         Maiores numquam porro dignissimos similique explicabo, mollitia distinctio quam neque fugit quod quae fuga quas eveniet. Blanditiis, eos! Ipsam ab nostrum voluptatum, sunt adipisci ipsum dolores modi voluptate consequatur! Unde! <br />
         Harum corrupti nemo officiis at voluptates itaque voluptatem quod similique, quibusdam fuga repellat recusandae sapiente maiores consequuntur ratione beatae temporibus iste facere architecto possimus rem ullam? Ratione in velit amet. <br />
         Natus perspiciatis at maxime corrupti reiciendis ab velit dolor, laborum, ipsum ad optio tempora debitis, sapiente assumenda? Aliquid alias voluptatem iusto modi atque reiciendis maiores nobis obcaecati officia, esse earum! <br />
         Autem adipisci quo inventore doloremque quam non consectetur earum sed sit in id molestias, repellendus corporis, iste quis nulla perspiciatis accusamus! Obcaecati odit eveniet aut tempore, consectetur eius ipsam repudiandae. <br />
         Nemo minima excepturi corporis temporibus pariatur hic, laudantium veritatis laboriosam quae qui modi. Quo eos voluptatibus minima inventore, expedita ipsa, maiores voluptatum corrupti in rem aliquam molestiae molestias cupiditate aliquid? <br />
         Libero quis, illo porro asperiores accusamus dolor voluptas ab et, labore, consequuntur sed tempora! Nisi fugit sunt libero architecto alias vero velit sed distinctio, cumque id quod, mollitia sapiente cum. <br />
         Possimus voluptas beatae cupiditate minus tempore. Enim incidunt maiores sint sit officiis nulla est, error consequuntur nisi? Deleniti quos qui enim numquam, harum, dolores, temporibus deserunt reprehenderit odio et consequatur! <br />
         Veritatis expedita quam ipsam harum, nam quibusdam repellat itaque praesentium accusantium, minus, molestias perspiciatis assumenda tempore eveniet illum necessitatibus dolor! Illum quaerat amet facilis. Recusandae alias magnam autem eius. Culpa. <br />
         Officia dolor nihil consectetur a quos neque voluptatem, eveniet voluptas vitae, quae soluta quibusdam, ipsa perspiciatis eaque iusto ut rerum unde dicta placeat. Dignissimos, dicta. Fugit libero ex quisquam delectus? <br />
         Inventore hic consectetur atque consequatur tempora optio harum, possimus eligendi ipsum modi libero ipsam voluptatibus sunt repellendus ipsa ducimus fugit delectus quam aut dolor dolorum doloribus nam. Reiciendis, nihil nemo.</p>
       </div>
    </div>
  )
}

export default App
