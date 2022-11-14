# TimeContext

`TimeContext` can be used to synchronise timers across an application. First add the context to the App:

```typescript
import { TimeProvider } from 'time-context';

root.render(
  <TimeProvider>
    <App />
  </TimeProvider>
);
```

Then use the `useTime` hook in any component:

```typescript
import { useTime } from 'time-context';

export type ComponentProps = {
  expiryDate: Date;
};

const Component: React.FunctionComponent<ComponentProps> = ({
  expiryDate,
}) => {
  const {
    t1, // value flips every second
    t10, // value flips ten times a second
  } = useTime();

  // For example, to get remaining time
  const expiryFromNowInSeconds = useMemo(() => {
    return (expiryDate.getTime() - Date.now().getTime()) / 1000;
  }, [expiryTime, t1]);

  return <span>Seconds left: {expiryFromNowInSeconds}</span>;
};
```

`t10` can be used to update the value of a progress bar to a higher level of detail, for example.
