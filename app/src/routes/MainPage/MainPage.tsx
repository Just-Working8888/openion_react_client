
import { useAppDispatch, useAppSelector } from "store/hook";
import classes from "./MainPage.module.scss";
import { FC, useEffect } from "react";
import { Baner, News, SendMail, TestCard } from "Components";
import { fetchQuetions } from "store/reducers/producRedusers";
import { Card, Typography } from "antd";
import { fetchNews } from "store/reducers/newsReduser";
import MyComponent from "Components/Test";
const { Title, Paragraph, Text, Link } = Typography;
const MainPage: FC = () => {
  const { data } = useAppSelector((state) => state.quetions)
  const news = useAppSelector((state) => state.news.data)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchQuetions({}))
    dispatch(fetchNews({}))
  }, [])
  return (
    <div className={classes.main}>
      <Baner />
      <MyComponent />
      <div>
        <Typography>
          <Title>Introduction</Title>

          <Paragraph>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might <br /> cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
          </Paragraph>
        </Typography>
        <br />
        <div className={classes.main_list}>
          {data.map((item) => <TestCard id={item.id} image={item.image} title={item.title} />)}
        </div>
      </div>
      <div>
        <Typography>
          <Title>News</Title>

          <Paragraph>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might <br /> cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
          </Paragraph>
        </Typography>
        <Card>
          <News />
        </Card>
      </div>


      <SendMail />
    </div >
  );
};

export default MainPage;
