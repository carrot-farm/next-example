import Link from 'next/link';

const linkStyle = {
    marginRight: '1rem'
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>홈</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>소개</a>
        </Link>
        {/* prefetch 속성 사용하면 데이터를 먼저 불러온 다음 라우팅을 시작 */}
        <Link prefetch href="/ssr-test">
            <a style={linkStyle}>SSR test</a>
        </Link>
    </div>
);
export default Header;