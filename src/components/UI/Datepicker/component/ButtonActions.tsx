import Box from '@components/UI/Box';
import Button from '@components/UI/Button';

export function ButtonActions({
  onCancel,
  onApply,
}: {
  onCancel?: () => void;
  onApply?: () => void;
}) {
  return (
    <Box className="mt-4 flex justify-end gap-2 text-primary">
      <Button color="basic" onClick={onCancel}>
        Cancel
      </Button>
      <Button color="basic" onClick={onApply}>
        Apply
      </Button>
    </Box>
  );
}
