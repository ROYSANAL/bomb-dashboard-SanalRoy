import { Button } from '@material-ui/core';
import React from 'react';
import useWallet from 'use-wallet';
import UnlockWallet from '../../../../components/UnlockWallet';
import useApprove, { ApprovalState } from '../../../../hooks/useApprove';
import useBombFinance from '../../../../hooks/useBombFinance';
import useCatchError from '../../../../hooks/useCatchError';
import useModal from '../../../../hooks/useModal';
import useTokenBalance from '../../../../hooks/useTokenBalance';
import ExchangeModal from '../../../Bond/components/ExchangeModal';

const ExchangeCard = ({
  action,
  fromToken,
  fromTokenName,
  toToken,
  toTokenName,
  priceDesc,
  onExchange,
  disabled = false,
  disabledDescription,
}) => {
  const catchError = useCatchError();
  const {
    contracts: { Treasury },
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(fromToken, Treasury.address);

  const { account } = useWallet();
  const balance = useTokenBalance(fromToken);
  const [onPresent, onDismiss] = useModal(
    <ExchangeModal
      title={action}
      description={priceDesc}
      max={balance}
      onConfirm={(value) => {
        onExchange(value);
        onDismiss();
      }}
      action={action}
      tokenName={fromTokenName}
    />,
  );

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div>{`${action} ${toTokenName}`}</div>
        <div style={{ color: 'grey' }}>{priceDesc}</div>
      </div>

      {!!account ? (
        <>
          {approveStatus !== ApprovalState.APPROVED && !disabled ? (
            <Button
              className="shinyButton"
              disabled={approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN}
              onClick={() => catchError(approve(), `Unable to approve ${fromTokenName}`)}
            >
              {`Approve ${fromTokenName}`}
            </Button>
          ) : (
            <Button
              className={disabled ? 'shinyButtonDisabled' : 'shinyButton'}
              onClick={onPresent}
              disabled={disabled}
            >
              {disabledDescription || action}
            </Button>
          )}
        </>
      ) : (
        <UnlockWallet />
      )}
    </div>
  );
};

export default ExchangeCard;
