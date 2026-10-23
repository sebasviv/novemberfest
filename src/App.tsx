import { DependencyProvider } from '@presentation/providers/DependencyProvider';
import { InvitationPage } from '@presentation/pages/InvitationPage';

export default function App() {
  return (
    <DependencyProvider>
      <InvitationPage />
    </DependencyProvider>
  );
}
