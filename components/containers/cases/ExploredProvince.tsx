interface IExploredProvinceProps {}

const ExploredProvince: React.FunctionComponent<IExploredProvinceProps> = (props) => {
    // const [selectedMenu, setSelectedMenu] = useState<ISelectItemWithIcon | undefined>({
    //     icon: <TiArrowSortedDown />,
    //     label: "",
    //     value: "",
    // });
    // const {
    //     state: { cases },
    // } = useCases();

    // console.log(cases);

    // const handleSelectChange = (e: string | null) => {
    //     const willBeSelected: ISelectItemWithIcon | undefined = dailySpreadMenu.find(
    //         (menuItem) => menuItem.value === e
    //     );
    //     setSelectedMenu(willBeSelected);
    // };

    return (
        <div>
            <h1>ExploredProvince</h1>
            {/* <Box sx={box.titleAndMenu}>
                <Text component="span" sx={typography.textHead}>
                    Daily spread case
                </Text>
                <Select
                    data={dailySpreadMenu}
                    onChange={handleSelectChange}
                    placeholder="Sort the case"
                    value={selectedMenu?.value}
                    itemComponent={SelectItemWithIcon}
                    rightSection={selectedMenu?.icon}
                    styles={select}
                />
            </Box> */}
        </div>
    );
};

export default ExploredProvince;
