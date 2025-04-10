import { Navigate, useLocation } from 'react-router';
import { Card } from '@components/Card';
import Col from '@components/Col';
import DashboardLayout from '@components/DashboardLayout';
import IMAGE_CONSTANTS from '@constant/images';
import { checkValidPath, getTitleFromPath } from '@utils/function';
import {
  friendCardData,
  friendSuggestionData,
  giftCardData,
  musicCardContents,
  paymentData,
  postCardContent,
  followCardData,
  infoCardContent,
  ProductCardContent,
} from '@utils/pages/cards';

const ParentMenu = () => {
  const location = useLocation();

  const isValid = checkValidPath(location.pathname);

  if (isValid === '404') {
    return <Navigate to="/404" replace />;
  }

  const title = getTitleFromPath(location.pathname);
  return (
    <DashboardLayout>
      <Card
        variant="breadcrumb"
        content={{ title: title, bgImg: IMAGE_CONSTANTS.BREADCRUMB_BG }}
      />

      <Col col="col-6">
        {infoCardContent.map((item, index) => (
          <Card key={index} variant="info" content={item} />
        ))}
      </Col>

      <Col col="col-3">
        {postCardContent.map((item, index) => (
          <Card key={index} variant="post" content={item} />
        ))}
      </Col>
      <Col col="col-4">
        {ProductCardContent.map((item, index) => (
          <Card key={index} variant="product" content={item} />
        ))}
      </Col>

      <Col col="col-3">
        {musicCardContents.map((item, index) => (
          <Card key={index} variant="music" horizontal content={item} />
        ))}
      </Col>

      <Col col="col-3">
        {followCardData.slice(0, 3).map((user, index) => (
          <Card key={index} variant="follow-card" content={user} />
        ))}
      </Col>

      <Col col="col-4">
        {friendSuggestionData.map((user, index) => (
          <Card key={index} variant="friend-suggestion" content={user} />
        ))}
      </Col>

      <Col col="col-3">
        {friendCardData.map((content, index) => (
          <Card variant="friend" key={index} content={content} />
        ))}
      </Col>

      <Col col="col-3">
        {giftCardData.map((card, index) => (
          <Card key={index} variant="gift-card" content={card} />
        ))}
      </Col>

      <Col col="col-3" className="flex items-start">
        {paymentData.map((content, index) => (
          <Card key={index} variant="payment-card" content={content} />
        ))}
      </Col>
    </DashboardLayout>
  );
};

export default ParentMenu;
