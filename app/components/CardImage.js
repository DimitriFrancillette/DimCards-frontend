import Image from 'next/image';

export default function CardImage({ data, cardStyle, circles, addCardToDeck }) {
  return (
    <div
      className='flex flex-col items-center mb-6 mx-2 cursor-pointer'
      key={data._id}
      name={data.name}
      regions={data.regions}
      cost={data.cost}
      type={data.type}
      keywords={data.keywords}
      rarity={data.rarity}
      cardcode={data.cardCode}
      onClick={() =>
        addCardToDeck({
          id: data._id,
          name: data.name,
          regions: data.regions,
          cost: data.cost,
          type: data.type,
          keywords: data.keywords,
          cardCode: data.cardCode,
          rarity: data.rarity,
        })
      }
    >
      <Image
        className={cardStyle}
        src={data.assets[0].gameAbsolutePath}
        width={250}
        height={250}
        alt={data.name}
        style={{ width: 'auto', height: 'auto' }}
        loading='lazy'
        placeholder='blur'
        blurDataURL='/img/Card_Back.webp'
      />
      <div className='flex gap-1'>{circles}</div>
    </div>
  );
}
