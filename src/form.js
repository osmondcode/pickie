import FormSidebar from "./components/formSidebar";
import Register from "./components/register";
const Form = () => {
    return ( 
        <section className="w-full h-screen flex items-center justify-center">
            <div className="w-[45%] h-screen hidden md:flex">
                <FormSidebar/>
            </div>
            <div className="w-full md:w-[55%] h-screen">
                <Register/>
            </div>
        </section>
     );
}
 
export default Form;