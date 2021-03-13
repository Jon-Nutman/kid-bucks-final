import React from "react";
import { useContext } from "react";
import { List, Avatar, Space } from "antd";
import { store } from "./ProviderCommon";
import styles from "./PrizesList.module.css";

export default function PrizeList(props) {
  const prizes = [
    {
      prize: "Robux",
      points: 100,
    },
    {
      title: "Family Movie Night",
      points: 15,
    },
    {
      title: "Choose Doge Treats",
      points: 5,
    },
    {
      title: "DogeCoins",
      points: 10,
    },
  ];

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={prizes}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={
            [
              //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]
          }
          extra={
            <div className={styles.pointPrizeAvatar} width={50} alt="points">
              {prizes[0].points}
            </div>
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}
