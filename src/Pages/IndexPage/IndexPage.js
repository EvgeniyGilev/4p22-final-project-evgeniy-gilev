import './IndexPage.css';

import Card from '../../Components/Card/Card';
import Button from '../../Components/Common/Button/Button';
import { IconSearch } from '../../Components/IconSVG/IconSearch';
import { IconFilter } from '../../Components/IconSVG/IconFilter';
import { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import { getPageProducts } from './IndexPage.utils';
import { useDispatch, useSelector } from 'react-redux';

export default function IndexPage() {
  // Redux
  const { isLoading, products } = useSelector((state) => state.mainReducer);
  const dispatch = useDispatch();

  // Фильтрация
  const [searchInput, setSearchInput] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);

  // Фильтр по категириям
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Итоговые продукты
  const [totalProducts, setTotalProducts] = useState([]);

  // Пагинация
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(8);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => {
        setFoundProducts(result);
        setTotalProducts(getPageProducts(result, 0, 8));

        setCategories([
          '',
          ...Array.from(new Set(result.map((item) => item.category))),
        ]);
      });
  }, []);

  // Обработчик события при нажатии кнопки Поиск
  const onSearch = () => {
    setPage(0);
    setFoundProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      )
    );
  };

  // Фильтруем продукты по категории
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  // Устанавливаем итоговый список продуктов в зависимости от найденных и отфильтрованных продуктов
  useEffect(() => {
    if (filteredProducts.length !== products.length) {
      const totalProducts = foundProducts.filter(
        (product) => filteredProducts.indexOf(product) !== -1
      );
      setTotalProducts(getPageProducts(totalProducts, page, pageSize));
      setPageCount(Math.ceil(totalProducts.length / pageSize));
    } else {
      setTotalProducts(getPageProducts(foundProducts, page, pageSize));
      setPageCount(Math.ceil(foundProducts.length / pageSize));
    }
  }, [foundProducts, filteredProducts, page, pageSize]);

  return (
    <div className="index-page">
      <main className="index-page__main">
        <div className="search-block">
          <input></input>
          <div className="search-block__button">
            <IconSearch />
            <Button type="SearchButton" onClick={onSearch}>
              Поиск
            </Button>
          </div>
          <div className="search-select">
            <IconFilter />
            <select
              name="categories"
              className="select-data"
              value={selectedCategory}
              onChange={(event) => {
                setSelectedCategory(event.target.value);
                setPage(0);
              }}
            >
              <option value="">Все категории</option>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="index-page__container">
          {!isLoading ? (
            totalProducts.length !== 0 ? (
              totalProducts.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                    img={item.image}
                    price={item.price}
                  />
                );
              })
            ) : (
              <h1>Совпадений не найдено...</h1>
            )
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <Stack spacing={2}>
          <Pagination
            page={page + 1}
            count={pageCount}
            onChange={(event, page) => {
              setPage(page - 1);
            }}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </main>
    </div>
  );
}
