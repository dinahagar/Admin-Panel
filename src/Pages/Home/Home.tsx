import { Layout } from "antd";
import { StyledContent, StyledContentDiv, StyledFooter, StyledLayout } from "./Home.styles";
  
const Home: React.FC = () => {
    
    return (
        <>
            <StyledLayout>
                <Layout>
                    <StyledContent>
                        <StyledContentDiv>
                            <h1>Welcome to Admin Panel.</h1>
                        </StyledContentDiv>
                    </StyledContent>
                    <StyledFooter>
                        <strong>PaySky</strong>
                    </StyledFooter>
                </Layout>
            </StyledLayout>
        </>
    )
}

export default Home

