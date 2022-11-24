interface ItemProps {
  title: string;
  dataSource: Array<{
    name?: string;
    value: React.ReactNode | Element;
  }>;
  status?: "temp" | "inProgress" | "review" | null;
}
interface InfoItemProps {
  dataSource: Array<{
    name?: string;
    value: React.ReactNode | Element;
  }>;
}
