import { Layout } from "antd";
import { StyledContent, StyledContentDiv, StyledFooter, StyledLayout, StyledSpan } from "./Home.styles";
  
const Home: React.FC = () => {
    
    const user = localStorage.getItem('username')
    
    return (
        <>
            <StyledLayout>
                <Layout>
                    <StyledContent>
                        <StyledContentDiv>
                            <h1>Hello <StyledSpan>&ldquo;{user}&rdquo;</StyledSpan> Welcome to Admin Panel.</h1>
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

