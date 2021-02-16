import {Container} from 'react-bootstrap'

import Header from './header';
const Layout = ({children}) => {
    return(
        <div className='bg'>
            <Header/>
            <Container>
                <div className='box'>
                    {children}
                </div>
            </Container>
        </div>
    )
}
export default Layout