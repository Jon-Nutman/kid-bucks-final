
import React from 'react'
import { useContext } from 'react'
import { List, Avatar, Space } from 'antd';
import { store } from './ProviderCommon'
import styles from './GoalList.module.css'

export default function GoalList(props) {
  const goals = [{
    title: 'Clean Your Room',
    points: 5
  },
  {
    title: 'Wash Yo Self',
    points: 5,
  },
  {
    title: 'Walk the Doge',
    points: 5,
  },
  {
    title: 'Complete Asych Homework',
    points: 5,
  }
]

  for (let i = 0; i < 2; i++) {
    goals.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }
  
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
   <List
    itemLayout="vertical"
    size="small"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={goals}
    // footer={
    //   <div>
    //     <b>Kid Coin</b> Set goals. Set rewards. Achieve your goals. Cash out. Repeat.
    //   </div>
    // }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
        //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <div
            className={styles.pointGoalAvatar}
            width={100}
            alt="points">{goals[0].points}
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
  />)
    }

