import { CogsClientMessage, CogsConnection } from '@clockworkdog/cogs-client';
import { useEffect } from 'react';

export default function useCogsMessage<T extends CogsClientMessage = CogsClientMessage>(
  connection: CogsConnection,
  handleMessage: (message: T) => void
): void {
  useEffect(() => {
    const listener = (event: CustomEvent<T>) => {
      handleMessage(event.detail);
    };

    connection.addEventListener('message', listener);
    return () => connection.removeEventListener('message', listener);
  }, [connection, handleMessage]);
}
