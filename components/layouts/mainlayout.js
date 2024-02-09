import Header from '../Header'
import Footer from '../Footer'
import CustomHead from '../CustomHead'

export default function MainLayout({children}){

    return (
        <div>

            <CustomHead />
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )   
}