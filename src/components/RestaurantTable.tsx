import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

interface RestaurnatsProps {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants } : RestaurnatsProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}