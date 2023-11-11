import { VStack, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
      const [books, setBooks] = useState([]);
      useEffect(() => {
            const fetchBooks = async () => {
                  const books = await getAllBooks();
                  setBooks(books);
            };
            fetchBooks();
      }, []);
      const variant = useBreakpointValue(
            {
                  xl: "5",
                  lg: "4",
                  md: "3",
                  sm: "2",
                  xs: "1",
            },
            {
                  fallback: "sm",
            }
      );
      return (
            <VStack w="100vw" p={10}>
                  <Grid templateColumns={`repeat(${variant}, 1fr)`} gap={6}>
                        {books?.books?.map((book) => (
                              <Books key={`${book.id} ${book.title}`} {...book} />
                        ))}
                  </Grid>
            </VStack>
      );
}
