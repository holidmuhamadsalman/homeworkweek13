import { Card, Heading, Image, Text, VStack, CardBody, Divider, CardFooter, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
      return (
            <Card maxW="sm" boxShadow="xl" key={id}>
                  <CardBody>
                        <Image src={`http://localhost:8000/${image}`} borderRadius="md" />
                        <VStack mt="6" spacing="3">
                              <Heading size={"md"}>
                                    {title} ({year})
                              </Heading>
                              <Text>
                                    <span> Author : </span>
                                    {author}
                              </Text>
                              <Text>
                                    <span> Publisher : </span>
                                    {publisher}
                              </Text>
                        </VStack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                        <Link to={`/books/${id}`}>
                              <Button variant="solid" colorScheme="yellow" justifyContent="right">
                                    Detail
                              </Button>
                        </Link>
                  </CardFooter>
            </Card>
      );
}
