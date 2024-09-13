import { Layout } from "antd";
import Sidebar from "./componenets/Sidebar";
import Header from "./componenets/Header";
import Content from "./componenets/Content";
import { StyledFooter, StyledLayout } from "./Home.styles";
  
const Home: React.FC = () => {
    
    return (
        <>
            <StyledLayout>
                <Sidebar />
                <Layout>
                    <Header/>
                    <Content />
                    <StyledFooter>
                        <strong>PaySky</strong>
                    </StyledFooter>
                </Layout>
            </StyledLayout>
        </>
    )
}

export default Home

