import "./styles.scss";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

const Home = () => {
    const containerVariant = {
        hidden: {
            opacity: 0,
            x: "100vw"
        },
        visible: {
            x:0,
            opacity: 1,
            transition: {type: "spring", delay: .7, duration: 1.5}
        },
        exit:{
            x: "-100vw",
            transition: {ease: "easeInOut", duration: 1}
        }
    }
    return(
        <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Menu/>
            <Footer/>
        </motion.div>
    )
}

export default Home;