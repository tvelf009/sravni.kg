import { TopHeader } from '../../components/TopHeader';
import { Header } from '../../components/Header';
import Head from "next/head";
import { Footer } from '../../components/Footer';
import { BreadcrumbCmpnt } from '../../components/BreadcrumbCmpnt';
import { Text, Box, Button, Container, SimpleGrid, GridItem, Input, Center, FormControl } from '@chakra-ui/react';
import { privateRoute } from '../../../src/components/dash/privateRoute';
import { BreadCrumb } from '../../interfaces/interface';
import { CurrencyDecorIcon } from '../../../public/images/icons/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import SearchAPI from '../../../lib/api/search';
import Cookie from "js-cookie";


const BrCrm:BreadCrumb[] = [{
  link: "#",
  name: "Онлайн заявка на кредит"
}]



const FormIndex = ({token}:{token:string}) => {

  const [date] = React.useState<Date>(new Date())

  const handleDateChange = (date:any) => {
    console.log(date);
    
  }


  const submitForm = async(event:React.FormEvent) => {
  
    event.preventDefault();
    const { phone, email, monthlyRevenue, salary, turnover, actualAddress, address, firstName, issuedBy, lastName, middleName, passportNumber, personalNumber, issuedDate, workPlace, workPlaceAddress, workPosition, expiryDate, workExperience, birthPlace, birthDate } = event.target as any;
  
    // Cookie.set("creditId", condition.id + "");
    // Cookie.set("creditAmount", condition.amount + "");
    // Cookie.set("creditPurpose", condition.purposeId + "");
    // Cookie.set("creditTerm", condition.term + "");

    let submitData = {
      contact: {
        email: email.value,
        phone: phone.value
      },
      credit: {
        id: Cookie.get("creditId")
      },
      creditAmount: Cookie.get("creditAmount"),
      creditPurpose: Cookie.get("creditPurpose"),
      creditTerm: Cookie.get("creditTerm"),
      income: {
        monthlyRevenue: monthlyRevenue.value,
        salary: salary.value,
        turnover: turnover.value
      },
      job: {
        workExperience: workExperience.defaultValue,
        workPlace: workPlace.value,
        workPlaceAddress: workPlaceAddress.value,
        workPosition: workPosition.value
      },
      passport: {
        actualAddress: actualAddress.value,
        address: address.value,
        birthDate: birthDate.defaultValue,
        birthPlace: birthPlace.value,
        expiryDate: expiryDate.defaultValue,
        firstName: firstName.value,
        issuedBy: issuedBy.value,
        issuedDate: issuedDate.defaultValue,
        lastName: lastName.value,
        middleName: middleName.value,
        passportNumber: passportNumber.value,
        personalNumber: personalNumber.value
      }
    }
  
  
    console.log(Cookie.get("creditId"));


    
    const {data} = await SearchAPI.createApplication(submitData,token);
    
    console.log(data);
    
  }
  
  return (
    <>

      <Head>
        <title>Ваш помощник при выборе кредита</title>   
      </Head>
      <Box minWidth="704px">
        <TopHeader/>
        <Header/>
        
        <BreadcrumbCmpnt inData={BrCrm}/>
        <Container maxWidth="xl">
          <form onSubmit={submitForm}>
          <FormControl >
            <Text fontSize="4xl" as="h2" mt={10}>Онлайн подача заявлении</Text>
            <CurrencyDecorIcon/>
            <Text mt={10}>О СЕБЕ</Text>
            <SimpleGrid  columns={[2, null, 3]} gap={5}>
              <GridItem>
                  <Text mt={5}>Фамилие</Text>
                  <Input type="text" variant="outline" placeholder="Фамилие" name="lastName" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Имя</Text>
                  <Input variant="outline" placeholder="Имя" name="firstName" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Отчество</Text>
                  <Input variant="outline" placeholder="Отчество" name="middleName" />
              </GridItem>
            </SimpleGrid>
            <SimpleGrid  columns={[2, null, 3]} gap={5}>
              <GridItem>
                  <Text mt={5}>Место рождения</Text>
                  <Input variant="outline" placeholder="Место рождения" name="birthPlace"  />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Дата рождения</Text>
                  <DatePicker dateFormat="yyyy-MM-dd"  selected={date} onChange={date => handleDateChange(date)} wrapperClassName="datePicker" name="birthDate" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Семейное положение</Text>
                  <Input variant="outline" placeholder="Семейное положение"  />
              </GridItem>
            </SimpleGrid>
            <SimpleGrid  columns={[2, null, 3]} gap={5}>
              <GridItem>
                  <Text mt={5}>Номер телефона</Text>
                  <Input variant="outline" placeholder="Номер телефона"  name="phone" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>EMail</Text>
                  <Input type="text" variant="outline" placeholder="EMail" name="email" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Адрес проживания</Text>
                  <Input type="text" variant="outline" placeholder="Адрес" name="address" />
              </GridItem>
            </SimpleGrid>
            <Text mt={10}>ПАСПОРТНЫЕ ДАННЫЕ</Text>
            <SimpleGrid  columns={[2, null, 2]} gap={5}>
              <GridItem>
                  <Text mt={5}>Номер паспорта</Text>
                  <Input variant="outline" placeholder="Номер паспорта"  name="passportNumber" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>ИНН</Text>
                  <Input variant="outline" placeholder="ИНН" name="personalNumber" />
              </GridItem>
              <GridItem w="100%">
                  <Text mt={5}>Дата выдачи</Text>
                  <DatePicker dateFormat="yyyy-MM-dd" selected={date} onChange={date => handleDateChange(date)} wrapperClassName="datePicker"  name="issuedDate" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Срок окончания</Text>
                  <DatePicker dateFormat="yyyy-MM-dd" selected={date} onChange={date => handleDateChange(date)} wrapperClassName="datePicker" name="expiryDate" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Кем выдан</Text>
                  <Input variant="outline" placeholder="Кем выдан" name="issuedBy" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Фактический адрес</Text>
                  <Input variant="outline" placeholder="Фактический адрес" name="actualAddress"   />
              </GridItem>
            </SimpleGrid>
            <Text mt={10}>РАБОТА</Text>
            <SimpleGrid  columns={[2, null, 2]} gap={5}>
              <GridItem>
                  <Text mt={5}>Место работы</Text>
                  <Input variant="outline" placeholder="Место работы" name="workPlace"    />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Должность</Text>
                  <Input variant="outline" placeholder="Должность" name="workPosition" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Заработная плата на руки</Text>
                  <Input variant="outline" placeholder="Заработная плата на руки" name="salary" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Стаж работы с</Text>
                  <DatePicker dateFormat="yyyy-MM-dd" selected={date} onChange={date => handleDateChange(date)} wrapperClassName="datePicker" name="workExperience" />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Адрес работы</Text>
                  <Input variant="outline" placeholder="Адрес работы" name="workPlaceAddress" />
              </GridItem>
            </SimpleGrid>
            <Text mt={10}>ДОП. ИСТОЧНИКИ ДОХОДА</Text>
            <SimpleGrid  columns={[2, null, 3]} gap={5} mb={10}>
              <GridItem>
                  <Text mt={5}>Источник дохода</Text>
                  <Input variant="outline" placeholder="Источник дохода" name="name"   />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Ежемесячная выручка</Text>
                  <Input variant="outline" placeholder="Ежемесячная выручка" name="monthlyRevenue"  />
              </GridItem>
              <GridItem>
                  <Text mt={5}>Товарооборот бизнеса</Text>
                  <Input variant="outline" placeholder="Товарооборот бизнеса" name="turnover"  />
              </GridItem>
            </SimpleGrid>
            <Center p={10}>
              <Button colorScheme="blue" size="lg" type="submit">ПОДАТЬ ЗАЯВКУ</Button>
            </Center>
            </FormControl>
            </form>
        </Container>
        <Footer/>
        <style jsx global>{`
        .datePicker {
          border: 1px solid #e2e8f0;
          padding: 8px;
          border-radius: 6px;
          width: 100%;
        }
      `}</style>
      </Box>
    </>
  )
};

FormIndex.getInitialProps = async(ctx:any) => {

return {
  token: ctx.auth.token,  
  }
}

export default privateRoute(FormIndex) ;



