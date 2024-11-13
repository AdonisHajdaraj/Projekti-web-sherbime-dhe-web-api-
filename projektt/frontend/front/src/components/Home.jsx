
import React from 'react';
import { 
    Navbar, 
    Logo, 
    NavigationLinks, 
    NavLink, 
    ButtonsContainer, 
    LoginButton, 
    GuestButton, 
    HomeContainer, 
    AdminRegisterLink, 
    SchoolInfo, 
    Title, 
    SchoolImage 
} from '../styles/styles';
import { LoremIpsum } from 'lorem-ipsum';
import bg from '../assets/bg.png';
import bg1 from '../assets/bg1.png';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const lorem = new LoremIpsum();
    const navigate = useNavigate(); 

    const LoremText = lorem.generateParagraphs(1);

    const handleLoginClick = () => {
        navigate('/choose-user'); 
    };

    return (
        <>
            <Navbar>
                <Logo src={bg1} alt='logo' />
                <NavigationLinks>
                    <NavLink href='#'>About Us</NavLink>
                    <NavLink href='#'>Products</NavLink>
                    <NavLink href='#'>Contact Us</NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
                    <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
                </ButtonsContainer>
            </Navbar>

            <HomeContainer>
                <SchoolInfo>
                    <Title>School Management System</Title>
                    <div>
                        <p>{LoremText}</p>
                    </div>
                    <AdminRegisterLink as={Link} to='/adminRegister'>
                        Admin Register
                    </AdminRegisterLink>
                </SchoolInfo>
                <SchoolImage src={bg} alt="Pupils" />
            </HomeContainer>
        </>
    );
};

export default Home;
