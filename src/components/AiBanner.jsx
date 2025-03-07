import { ExternalLink } from 'lucide-react'
import { useColorMode } from '@docusaurus/theme-common'
import aiConfig from '@site/ai.json'

const AiBanner = () => {
    const { colorMode } = useColorMode()

    if (!aiConfig.banner) {
        return null
    }

    const bannerStyle = {
        borderRadius: '1rem',
        border: colorMode === 'dark' ? '1px solid #DD7BFF' : '1px solid #DD7BFF',
        backgroundColor: colorMode === 'dark' ? '#0A0A0A' : 'white',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.30), 0px 12px 24px 0px rgba(0, 0, 0, 0.20)'
    }

    return (
        <div className="banner" style={bannerStyle}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <a href="#" className="banner-button inline-flex items-center justify-center px-4 py-2 text-[#7984EB] hover:bg-purple-50 transition-colors text-[0.875rem]">
                    <svg width="14" height="15" className="mr-2" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                            <path id="Vector" d="M3.16177 3.24116C2.9786 2.7737 2.98593 2.23956 3.06726 1.75085C3.62701 1.91905 4.1528 2.18442 4.62058 2.53484C4.82574 2.69164 5.09464 2.74219 5.34522 2.66673C5.98813 2.4739 6.65599 2.37711 7.32718 2.37951C8.03131 2.37951 8.70026 2.48209 9.30767 2.66599C9.55826 2.74219 9.82716 2.69091 10.0316 2.53411C10.4991 2.18377 11.0247 1.91839 11.5842 1.75012C11.6655 2.23883 11.6721 2.77297 11.4904 3.2397C11.3805 3.52106 11.4354 3.84491 11.6428 4.07498C12.1733 4.66334 12.4561 5.33962 12.4561 6.04301C12.4561 7.59195 11.0127 9.11084 8.6944 9.57317C8.1141 9.68894 7.8877 10.4194 8.33171 10.8378C8.61674 11.106 8.79258 11.4841 8.79258 11.9046V14.1027C8.79258 14.2971 8.86978 14.4834 9.00719 14.6208C9.1446 14.7582 9.33096 14.8354 9.52529 14.8354C9.71961 14.8354 9.90598 14.7582 10.0434 14.6208C10.1808 14.4834 10.258 14.2971 10.258 14.1027V11.9046C10.258 11.487 10.1701 11.0899 10.0133 10.7301C12.2238 9.96297 13.9215 8.23599 13.9215 6.04301C13.9215 5.05607 13.5669 4.14898 12.9785 3.38917C13.1324 2.78835 13.1185 2.18314 13.0598 1.71861C13.0078 1.30244 12.9353 0.757307 12.6422 0.431987C12.2062 -0.0508631 11.4845 0.233425 10.9716 0.408541C10.4212 0.594075 9.89766 0.851527 9.41465 1.17421C8.73257 0.999887 8.03118 0.912491 7.32718 0.914105C6.59888 0.914105 5.89622 1.00569 5.23825 1.17495C4.75524 0.85226 4.23171 0.594808 3.68126 0.409273C3.16837 0.233425 2.44593 -0.0508631 2.00997 0.431987C1.71103 0.763168 1.64875 1.26507 1.59526 1.6915L1.5916 1.71934C1.53298 2.18461 1.51979 2.79055 1.67366 3.3921C1.0875 4.15118 0.732869 5.0568 0.732869 6.04301C0.732869 8.23526 2.43054 9.96297 4.6411 10.7301C4.48137 11.096 4.3981 11.4907 4.39638 11.89L4.27328 11.9149C3.74794 11.9874 3.41163 11.9222 3.18302 11.8255C2.62617 11.5896 2.33895 10.9953 1.98872 10.5411C1.77037 10.259 1.45238 9.90655 0.964403 9.74389C0.87309 9.71348 0.776683 9.70136 0.680686 9.70821C0.584688 9.71507 0.490981 9.74076 0.404913 9.78383C0.231092 9.87081 0.0989424 10.0233 0.0375358 10.2077C-0.0238707 10.3921 -0.00950406 10.5934 0.0774753 10.7672C0.164455 10.941 0.316922 11.0731 0.501336 11.1346C0.910183 11.2708 1.19301 11.9713 1.45238 12.282C1.72568 12.6102 2.0891 12.9531 2.61005 13.1744C3.10975 13.3869 3.69665 13.4623 4.39638 13.3766V14.1027C4.39638 14.2971 4.47357 14.4834 4.61098 14.6208C4.74839 14.7582 4.93475 14.8354 5.12908 14.8354C5.3234 14.8354 5.50977 14.7582 5.64718 14.6208C5.78458 14.4834 5.86178 14.2971 5.86178 14.1027V11.9046C5.86178 11.4841 6.03763 11.106 6.32265 10.8378C6.7674 10.4187 6.54026 9.68894 5.95996 9.57317C3.64096 9.11084 2.19827 7.59195 2.19827 6.04301C2.19827 5.34109 2.48036 4.6648 3.01011 4.07644C3.21746 3.84638 3.27168 3.52252 3.16177 3.24116Z" fill="#7984EB"/>
                        </g>
                    </svg>
                    View Source<ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a href="#" style={{color: "#DD7BFF"}} className="banner-button inline-flex items-center justify-center px-4 py-2 color-[#DD7BFF] rounded-lg border border-[#DD7BFF] hover:bg-purple-50 transition-colors text-[0.875rem]">
                    Report mistakes
                </a>
                <a href="#" style={{color: "#DD7BFF"}} className="banner-button inline-flex items-center justify-center px-4 py-2 color-[#DD7BFF] rounded-lg border border-[#DD7BFF] hover:bg-purple-50 transition-colors text-[0.875rem]">
                Request to remove
                </a>
                <a href="#" style={{color: "#DD7BFF"}} className="banner-button inline-flex items-center justify-center px-4 py-2 color-[#DD7BFF] rounded-lg border border-[#DD7BFF] hover:bg-purple-50 transition-colors text-[0.875rem]">
                    Claim Website
                </a>
            </div>
        </div>
    )
}

export default AiBanner