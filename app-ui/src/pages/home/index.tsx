import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
// @ts-ignore
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name="首页" />
      </div>
    </PageContainer>
  );
};

export default HomePage;
