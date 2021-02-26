import { TopHeader } from '../../../components/TopHeader';
import { Header } from '../../../components/Header';
import Head from "next/head";
import { Footer } from '../../../components/Footer';
import { BreadcrumbCmpnt } from '../../../components/BreadcrumbCmpnt';
import { Box,  Container, FormControl, FormLabel, Checkbox, CheckboxGroup, HStack, Input, Button, Textarea, SimpleGrid, GridItem, Select , InputGroup, InputRightAddon, Stack, Spacer, Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,  
  Text} from '@chakra-ui/react';
import { privateRoute } from '../../../../src/components/dash/privateRoute';
import CSS from 'csstype';
import { useState, useRef, ReactText } from 'react';
import { CreditForm } from '../../../interfaces/interface';
import SearchAPI from '../../../../lib/api/search';




const boxStyle1:CSS.Properties = {
  border: "1px solid #E6EAF0",
  borderRadius: "5px"
}

const boxStyle3:CSS.Properties = {
  border: "1px solid #E6EAF0",
  borderRadius: "5px",
  background: "#fff"
}

const boxStyle2:CSS.Properties = {
  display: "grid",
}

const inputStyle1:CSS.Properties = {
  background: "#fff"
}





const CreateCredit = ({updateData, isNew, token, id}:{updateData:CreditForm, isNew:boolean, token:string, id:number}) => {

  const [ rates, setRates ] = useState<any[]>(isNew? updateData.rates: [
    {
      additionalInfo: '',
      amountLimit: {
        max: 0,
        min: 1000
      },
      commission: 0,
      currency: {
        id: 1
      },
      effectiveRate: 0,
      rate: 0,
      termLimit: {
        max: 0,
        min: 3
      }
    }
  ])

  console.log(updateData);
  
  
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef(null)
  
  const [purposes, setPurposes] = useState<any[]>(isNew? updateData.purposes: [])
  const [pledges, setPledges] = useState<any[]>(isNew? updateData.condition.pledges:[])
  const [receiveTypes, setReceiveTypes] = useState<any[]>(isNew? updateData.condition.receiveTypes: [])
  const [documents, setDocuments] = useState<any[]>(isNew? updateData.documents:[])
  
  const [nxTitle, setNxTitle] = useState(isNew? updateData.title:"")
  const [nxDescription, setNxDescription] = useState(isNew? updateData.description:"")
  const [nxPartnerCreditUrl, setNxPartnerCreditUrl] = useState(isNew? updateData.partnerCreditUrl:"")
  const [nxMin, setNxMin] = useState<number>(isNew? updateData?.requirement.ageLimit.min: 22)
  const [nxMax, setNxMax] = useState<number>(isNew? updateData.requirement.ageLimit.max: 65)
  const [nxReqAdditionalInfo, setNxReqAdditionalInfo] = useState(isNew? updateData.requirement.additionalInfo != null? updateData.requirement.additionalInfo: "" :"")

  let purposesArray:any[] = [];
  let pledgesArray:any[] = [];
  let receiveTypesArray:any[] = [];
  let documentsArray:any[] = [];

  if(isNew){
    purposesArray = updateData.purposes.map((k) => k.id.toString())
    pledgesArray = updateData.condition.pledges.map((k) => k.id.toString())
    receiveTypesArray = updateData.condition.receiveTypes.map((k) => k.id.toString())
    documentsArray = updateData.documents.map((k) => k.id.toString())
  }
  
  const handleChange = (e:any, f:any) => {
    f(e.target.value)
  }

  const submitForm =  async(event:React.FormEvent) => {
    event.preventDefault();
    const { title, description, partnerCreditUrl, ReqAdditionalInfo, min, max } = event.target as any;

    if(isNew){
      let nxPurpose = purposesArray.map((k:any) => k = {id: k})
      let nxPledges = pledgesArray.map((k:any) => k = {id: k})
      let nxReceiveTypes = receiveTypesArray.map((k:any) => k = {id: k})
      let nxDocuments = documentsArray.map((k:any) => k = {id: k})
      
      setPurposes(nxPurpose)
      setPledges(nxPledges)
      setReceiveTypes(nxReceiveTypes)
      setDocuments(nxDocuments)
    }
    
    let submitData:CreditForm = {
      title: title.value,
      condition: {
        paymentType: {
          id: 1
        },
        pledges: pledges,
        receiveTypes: receiveTypes
      },
      description: description.value,
      documents: documents,
      partnerCreditUrl: partnerCreditUrl.value,
      purposes: purposes,
      rates: rates,
      requirement:{
        additionalInfo: ReqAdditionalInfo.value,
        ageLimit:{
          min: parseInt(min.value),
          max: parseInt(max.value)
        }
      }
    }

    if(isNew){
      const { data, status } = await SearchAPI.updateCredit(id, submitData, token);

      console.log(data, status);
      
    }else{
      const result = await SearchAPI.createCredit(submitData,token);
    } 
    
    // console.log(result);
    
  }

  const chBox = (event:any[], f:any) => {
    let prepareValue = event.map((k) => k = {id: parseInt(k)})
    f(prepareValue)
  }

  const addRate = () => {
    setRates([...rates, {
      additionalInfo: '',
      amountLimit: {
        max: 0,
        min: 1000
      },
      commission: 0,
      currency: {
        id: 1
      },
      effectiveRate: 0,
      rate: 0,
      termLimit: {
        max: 0,
        min: 3
      }
    }])
  }

  const removeRate = (index:number) => {
    
    if(rates.length == 1){
        setIsOpen(true)
    }else{
      const list = [...rates];
      list.splice(index,1);
      setRates(list)
    }

  }

  const handleRate = (e:any, index:number) => {
    
    const { name, value } = e.target as any;
    const list = [...rates];
    if(name.includes(".")){
      if(name === "currency.id"){
        console.log("sdsd");        
        list[index][name.split(".")[0]][name.split(".")[1]] = parseInt(value);
      }else{
        list[index][name.split(".")[0]][name.split(".")[1]] = value;
      }
    }else{
      list[index][name] = value;
    }

    console.log(e.target.value);
    
    setRates(list)
  }

  
  return (
    <>

      <Head>
        <title>Ваш помощник при выборе кредита</title>   
      </Head>
      <Box minWidth="704px">
        <TopHeader/>
        <Header/>        
        <BreadcrumbCmpnt/>
            <Container maxWidth="xl" mt={10} mb={10}>
                <form onSubmit={submitForm}>
                  <FormControl >
                    <FormLabel>Название кредита</FormLabel>
                      <Input type="text" id="hello" name="title" value={nxTitle} onChange={e => handleChange(e, setNxTitle)} isRequired  />
                      <SimpleGrid columns={[1, null, 12]} gap={10}>
                        <GridItem colSpan={8}>
                          <FormLabel mt={5}>Описание продукта</FormLabel>
                          <Textarea placeholder="Описание продукта, предназначение и прочая информация" name="description" value={nxDescription} onChange={e => handleChange(e, setNxDescription)} isRequired />
                        </GridItem>
                        <GridItem colSpan={4}>
                          <Stack>
                              <FormLabel mt={5}>Требования (возраст и прочее)</FormLabel>
                              <InputGroup>
                                <Input type="text" name="min" placeholder="минимально" value={nxMin} onChange={e => handleChange(e, setNxMin)}  style={inputStyle1}/>
                                <InputRightAddon children="лет" />
                              </InputGroup>
                              <InputGroup>
                                <Input type="text" name="max" placeholder="максимально"  value={nxMax} onChange={e => handleChange(e, setNxMax)} style={inputStyle1}/>
                                <InputRightAddon children="лет" />
                              </InputGroup>
                              <InputGroup>
                                <Input type="text" name="ReqAdditionalInfo" placeholder="Доп. требования" value={nxReqAdditionalInfo} onChange={e => handleChange(e, setNxReqAdditionalInfo)} style={inputStyle1} />
                              </InputGroup>
                            </Stack>
                        </GridItem>
                      </SimpleGrid>
                    <FormLabel>Ссылка на страницу кредита</FormLabel>
                      <Input type="text" name="partnerCreditUrl" value={nxPartnerCreditUrl} onChange={e => handleChange(e, setNxPartnerCreditUrl)} isRequired />
                      <SimpleGrid columns={[1, null, 12]} gap={10}>
                        <GridItem colSpan={12}> 
                          <Box mt={5} p={5} style={boxStyle1}>
                            <FormLabel>Способы выдачи</FormLabel>
                            <CheckboxGroup colorScheme="green" defaultValue={purposesArray} onChange={(value: ReactText[]) => chBox(value, setPurposes)} >
                              <HStack>
                                <Checkbox value="1">Потребительский</Checkbox>
                                <Checkbox value="2">Покупка авто</Checkbox>
                                <Checkbox value="3">Развитие бизнеса</Checkbox>
                                <Checkbox value="4">Ремонт и строительство</Checkbox>
                                <Checkbox value="5">Медицина</Checkbox>
                                <Checkbox value="6">Образование</Checkbox>
                                <Checkbox value="7">Погашение долгов</Checkbox>
                              </HStack>
                            </CheckboxGroup>
                          </Box>
                        </GridItem>
                      </SimpleGrid>
                      <SimpleGrid columns={[1, null, 12]} gap={10} mb={10}>
                        <GridItem colSpan={4}>
                          <Box mt={5} p={5} style={boxStyle1} h="250px">
                            <FormLabel>Обеспечение</FormLabel>
                            <CheckboxGroup colorScheme="green" defaultValue={pledgesArray} onChange={(value: ReactText[]) => chBox(value, setPledges)}>
                              <Box style={boxStyle2}>
                                <Checkbox value="1">Поручительство</Checkbox>
                                <Checkbox value="2">Авто</Checkbox>
                                <Checkbox value="3">Недвижимость</Checkbox>
                                <Checkbox value="4">Движимое имущество</Checkbox>
                              </Box>
                            </CheckboxGroup>
                          </Box>
                        </GridItem>
                        <GridItem colSpan={4}> 
                          <Box mt={5} p={5} style={boxStyle1} h="250px">
                            <FormLabel>Способы выдачи</FormLabel>
                            <CheckboxGroup colorScheme="green" defaultValue={receiveTypesArray} onChange={(value: ReactText[]) => chBox(value, setReceiveTypes)}>
                              <Box style={boxStyle2}>
                                <Checkbox value="1">Наличными</Checkbox>
                                <Checkbox value="2">На карту</Checkbox>
                                <Checkbox value="3">На счет</Checkbox>
                              </Box>
                            </CheckboxGroup>
                          </Box>
                        </GridItem>
                        <GridItem colSpan={4}>
                          <Box mt={5} p={5} style={boxStyle1} h="250px">
                            <FormLabel>Необходимые документы</FormLabel>
                            <CheckboxGroup colorScheme="green" defaultValue={documentsArray} onChange={(value: ReactText[]) => chBox(value, setDocuments)}>
                              <Box style={boxStyle2}>
                                <Checkbox value="1">Паспорт гражданина КР</Checkbox>
                                <Checkbox value="2">Документы на бизнес/справка о зарплате </Checkbox>
                                <Checkbox value="3">Справка с места жительства </Checkbox>
                                <Checkbox value="4">Свидетельство о браке, паспорт супруги (при наличии)</Checkbox>
                                <Checkbox value="5">Документы на залоговое имущество (при необходимости)</Checkbox>
                              </Box>
                            </CheckboxGroup>
                          </Box>
                        </GridItem>
                      </SimpleGrid>
                    {
                      rates.map((item, index) => (
                        <Box key={index} style={boxStyle1} p={5} mb={10} bg="#F4F5F5">
                          <SimpleGrid columns={[1, null, 3]} gap={10}>
                            <GridItem>
                              <FormLabel>Процент</FormLabel>
                              <Input type="text" name="rate" value={item.rate} onChange={e => handleRate(e, index)} style={inputStyle1} />
                            </GridItem>
                            <GridItem>
                              <FormLabel>Эффект. проц. ставка</FormLabel>
                              <Input type="text" name="effectiveRate" value={item.effectiveRate} onChange={e => handleRate(e, index)} style={inputStyle1} />
                            </GridItem>
                            <GridItem>
                              <FormLabel>Комиссия</FormLabel>
                              <Input type="text" name="commission"  value={item.commission} onChange={e => handleRate(e, index)} style={inputStyle1} />
                            </GridItem>
                          </SimpleGrid>
                            <SimpleGrid columns={[1, null, 3]} key={index} gap={10} mt={5} >
                              <GridItem>
                                <Box style={boxStyle3} p={3}>
                                  <FormLabel>Сумма кредита </FormLabel>
                                  <Stack>
                                    <InputGroup>
                                      <Input type="text" name="amountLimit.min" placeholder="минимально" value={item.amountLimit.min} onChange={e => handleRate(e, index)} style={inputStyle1}/>
                                      <InputRightAddon children={item.currency.id === 1? "сом": "$"} />
                                    </InputGroup>

                                    <InputGroup>
                                      <Input type="text" name="amountLimit.max" placeholder="максимально" value={item.amountLimit.max} onChange={e => handleRate(e, index)} style={inputStyle1}/>
                                      <InputRightAddon children={item.currency.id === 1? "сом": "$"} />
                                    </InputGroup>
                                    <Select name="currency.id" value={parseInt(item.currency.id)} onChange={e => handleRate(e, index)} style={inputStyle1}>
                                      <option value={parseInt("1")}>Кыргызский сом</option>
                                      <option value={parseInt("2")}>Американский доллар</option> 
                                    </Select>
                                  </Stack>
                                </Box>
                              </GridItem>
                              <GridItem>
                                <Box style={boxStyle3} p={3}>
                                  <FormLabel>Срок кредита</FormLabel>
                                  <Stack>
                                    <InputGroup>
                                      <Input type="text" name="termLimit.min" placeholder="минимально" value={item.termLimit.min} onChange={e => handleRate(e, index)} style={inputStyle1}/>
                                      <InputRightAddon children="мес" />
                                    </InputGroup>
                                    <InputGroup>
                                      <Input type="text" name="termLimit.max" placeholder="максимально"  value={item.termLimit.max} onChange={e => handleRate(e, index)} style={inputStyle1}/>
                                      <InputRightAddon children="мес" />
                                    </InputGroup>
                                    <InputGroup>
                                      <Input type="text" name="additionalInfo" placeholder="Примечание к кредиту" value={item.additionalInfo != null? item.additionalInfo: ""} onChange={e => handleRate(e, index)} style={inputStyle1} />
                                    </InputGroup>
                                  </Stack>
                                </Box>
                              </GridItem>
                              <GridItem>
                                <Box style={boxStyle3} p={3}>
                                  <FormLabel>Удаляется только данный пункт</FormLabel>
                                  <Stack>
                                    <Button onClick={() => removeRate(index)} >
                                      Удалить условие
                                    </Button>
                                  </Stack>
                                </Box>
                              </GridItem>
                            </SimpleGrid>
                        </Box>
                      ))
                    }
                    <Flex columns={[1, null, 2]}  gap={10}>
                      <Box>
                        <Button type="submit" mt={5} colorScheme="blue" >{
                          isNew? (
                            <Text>Применить изменения</Text>
                          ):(
                            <Text>
                                Создать кредит
                            </Text>
                            
                          )
                        }</Button>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button type="submit" mt={5} onClick={addRate}>Добавить условие</Button>
                      </Box>
                    </Flex>
                  </FormControl>
                </form>
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Предупреждение
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Условие кредитования как минимум должно быть одно
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button colorScheme="red" onClick={onClose} ml={3}>
                        ОК
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Container>
        <Footer/>
      </Box>
    </>
  )
};


CreateCredit.getInitialProps = async(ctx:any) => {

    let data; 
    let isNew = false;

    if(ctx.query.id != "new"){
      data = await fetch(`https://sravni.kg:9090/api/v1/products/credits/${ctx.query.id}`, {
        headers: {
          'Authorization': `Bearer ${ctx.auth.token}`
        }
      });
      data = await data.json()
      isNew = true;
    }

  return {
    updateData: data,
    isNew: isNew,
    token: ctx.auth.token,
    id: ctx.query.id
  }
}



// export default CreateCredit;
export default privateRoute(CreateCredit) ;



