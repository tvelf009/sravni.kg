import Head from "next/head";
import { Center, GridItem, SimpleGrid, Text, VStack, FormControl,
  FormLabel,
  FormHelperText,
Input, 
Alert,
  AlertIcon,
Divider,
Button} from '@chakra-ui/react';
import { useState } from 'react';
import { login } from '../../../lib/api/loginService';
import CSS from 'csstype';
import { CurrencyDecorIcon, LogoWhiteLogin } from "../../../public/images/icons/icons";

export type LoginInputs = {
  username: string
  password: string
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




const Login = () => {

  const initialValues: LoginInputs = { username: "", password: "", };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login(inputs);
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
        <title>Sravni.KG | Ваш помощник при выборе кредита</title>   
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
                Войдите в свои аккаунт
              </Text>
              <CurrencyDecorIcon/>
              <VStack mt={10}>
              <FormControl id="email">
                <FormLabel style={formLabelStyle1}>Логин</FormLabel>
                <Input type="text" id="email" name="username" onChange={handleInputChange} value={inputs.username} style={inputStyle1}  />
                <FormHelperText>* логин выдается при подключении сервиса</FormHelperText>
              </FormControl>
              <FormControl >
                <FormLabel style={formLabelStyle1}>Пароль</FormLabel>
                <Input type="password" id="password"  name="password" onChange={handleInputChange} value={inputs.password} style={inputStyle1} />
              </FormControl>
              {error ? <Alert status="error"><AlertIcon />{error}</Alert>: null}              
              
              </VStack>
              <Button mt={10} isFullWidth={true} style={{background: "#28467F", color: "#fff"}} type="submit">ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ</Button>
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




export default Login;



