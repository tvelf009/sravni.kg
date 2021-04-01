import Head from "next/head";
import { Center, GridItem, SimpleGrid, Text, VStack, FormControl, FormLabel, Input, Alert, AlertIcon, Divider, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { registration } from '../../../lib/api/loginService';
import CSS from 'csstype';
import { CurrencyDecorIcon, LogoWhiteLogin } from "../../../public/images/icons/icons";

export type RegInputs = {
    email: string
    firstName: string
    lastName: string
    password: string
    phone: string
    username: string
}

const textStyle1:CSS.Properties = {
  fontSize: "38px",
  color: "#fff"
}

const centerStyle1:CSS.Properties = {
  position: "fixed",
  margin: 0,
  top: "31%",
  left: "23%",
}


const formLabelStyle1:CSS.Properties = {
  color: "#FFF"
}

const inputStyle1:CSS.Properties = {
  backgroundColor: "#FFF"
}




const Signup = () => {

  const initialValues: RegInputs = { username: "", password: "", email: "", firstName: "", lastName: "", phone: ""};

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await registration(inputs);
    if (res) setError(res);
  };

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };




  return (
    <>

      <Head>
        <title>Ваш помощник при выборе кредита</title>   
      </Head>
      <Center style={centerStyle1}>
          <SimpleGrid columns={[1, null, 12]} gap={20}>
            <GridItem colSpan={5}>
              <Center height="100%">
                <LogoWhiteLogin w={570} />
              </Center>
            </GridItem>
            <GridItem colSpan={2}>
            <Center height="100%">
              <Divider orientation="vertical" />
            </Center>
              
            </GridItem>
            <GridItem colSpan={5}>

            <form onSubmit={handleSubmit}>
              <Text style={textStyle1}>
                Регистрация
              </Text>
              <CurrencyDecorIcon/>
              <VStack mt={10}>
              <FormControl id="lastName">
                <FormLabel style={formLabelStyle1}>Фамилие</FormLabel>
                <Input type="text" id="lastName" name="lastName" onChange={handleInputChange} value={inputs.lastName} style={inputStyle1}  />
              </FormControl>
              <FormControl id="firstName">
                <FormLabel style={formLabelStyle1}>Имя</FormLabel>
                <Input type="text" id="firstName" name="firstName" onChange={handleInputChange} value={inputs.firstName} style={inputStyle1}  />
              </FormControl>
              <FormControl id="email">
                <FormLabel style={formLabelStyle1}>Почтовый адрес</FormLabel>
                <Input type="text" id="email" name="email" onChange={handleInputChange} value={inputs.email} style={inputStyle1}  />
              </FormControl>
              <FormControl id="phone">
                <FormLabel style={formLabelStyle1}>Телефон</FormLabel>
                <Input type="text" id="phone" name="phone" onChange={handleInputChange} value={inputs.phone} style={inputStyle1}  />
              </FormControl>
              <FormControl id="username">
                <FormLabel style={formLabelStyle1}>Логин</FormLabel>
                <Input type="text" id="username" name="username" onChange={handleInputChange} value={inputs.username} style={inputStyle1}  />
              </FormControl>
              <FormControl >
                <FormLabel style={formLabelStyle1}>Пароль</FormLabel>
                <Input type="password" id="password"  name="password" onChange={handleInputChange} value={inputs.password} style={inputStyle1} />
              </FormControl>
              {error ? <Alert status="error"><AlertIcon />{error}</Alert>: null}              
              
              </VStack>
              <Button mt={10} isFullWidth={true} style={{background: "#28467F", color: "#fff"}} type="submit">РЕГИСТРАЦИЯ</Button>
            </form>
            </GridItem>
          </SimpleGrid>
      </Center>
      <style jsx global>{`
        body{
          background: url(/images/web/login_background.jpg) rgb(0 0 0 / 80%) no-repeat center center fixed !important; 
          -webkit-background-size: cover !important;
          -moz-background-size: cover !important;
          -o-background-size: cover !important;
          background-size: cover !important;
          background-blend-mode: multiply;
        }
        `}</style>

    </>
  )

};




export default Signup;



