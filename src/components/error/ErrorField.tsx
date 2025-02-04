export default function ErrorField({ errorMessage }: { errorMessage: string }) {
  return <span className="text-red-500">{errorMessage}</span>;
}
