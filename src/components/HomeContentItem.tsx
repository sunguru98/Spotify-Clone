import React from "react";
import StyledHomeContentItem, {
  StyledItemCard,
} from "../styles/components/StyledHomeContentItem";
import { Link } from "react-router-dom";

interface HomeContentItemProps {
  name: string;
  cards?: any[];
}

const HomeContentItem: React.FC<HomeContentItemProps> = ({ name }) => {
  return (
    <StyledHomeContentItem>
      <div className='item-name'>
        <div className='item-name-wrapper'>
          <h2>{name}</h2>
          <Link to='/something'>See all</Link>
        </div>
      </div>
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
      <ItemCard
        image='https://i.scdn.co/image/ab67706c0000da84d33de7d2ac5fe98e913efd67'
        title='Tamil Top 50'
        description='The best top trending Tamil'
      />
    </StyledHomeContentItem>
  );
};

export interface ItemCardProps {
  image: string;
  title: string;
  description: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <StyledItemCard>
      <div className='image-wrapper'>
        <img src={image} alt='card-info' />
      </div>
      <div className='info-wrapper'>
        <Link to='/playlist/top-50-tamil'>{title}</Link>
        <span>
          The best top trending Tamil hits like Azhagiye, Vaan, Senjitaley, Aval
          from A.R. Rahman, Anirudh Ravichander,Santosh Narayanan and others.
          Follow{" "}
        </span>
      </div>
      <div className='play-button'></div>
      <div className='redirect-overlay'></div>
    </StyledItemCard>
  );
};

export default HomeContentItem;
