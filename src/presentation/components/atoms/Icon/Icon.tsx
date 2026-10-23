// Icon — wrapper tipado sobre @mui/icons-material.
// El dominio referencia iconos por IconKey; aquí se mapean a MUI.
// Para cambiar un icono, edita solo este mapa.
import type { IconKey } from '@core/types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import PoolIcon from '@mui/icons-material/Pool';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CoffeeIcon from '@mui/icons-material/Coffee';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import CelebrationIcon from '@mui/icons-material/Celebration';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import type { ComponentType } from 'react';

const ICONS: Record<IconKey, ComponentType<{ fontSize?: 'small' | 'inherit' | 'medium' | 'large' }>> = {
  calendar: CalendarMonthIcon,
  location: LocationOnIcon,
  clock: AccessTimeIcon,
  groups: GroupsIcon,
  personAdd: PersonAddIcon,
  pets: PetsIcon,
  car: DirectionsCarIcon,
  hotel: HotelIcon,
  pool: PoolIcon,
  restaurant: RestaurantIcon,
  coffee: CoffeeIcon,
  dinner: DinnerDiningIcon,
  grill: OutdoorGrillIcon,
  nightlife: NightlifeIcon,
  music: MusicNoteIcon,
  headphones: HeadphonesIcon,
  cocktail: LocalBarIcon,
  beer: SportsBarIcon,
  whatsapp: WhatsAppIcon,
  link: LinkIcon,
  home: HomeIcon,
  cart: ShoppingCartIcon,
  receipt: ReceiptIcon,
  paid: PaidIcon,
  check: CheckCircleIcon,
  info: InfoIcon,
  party: CelebrationIcon,
  volumeUp: VolumeUpIcon,
  volumeOff: VolumeOffIcon,
};

export interface IconProps {
  name: IconKey;
  size?: number;
  className?: string;
  decorative?: boolean; // default true → aria-hidden
}

export function Icon({ name, size = 22, className, decorative = true }: IconProps) {
  const MuiIcon = ICONS[name];
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', fontSize: size, lineHeight: 0 }}
      aria-hidden={decorative}
    >
      <MuiIcon fontSize="inherit" />
    </span>
  );
}
