import React from "react"
import PageContainer from "../containers/PageContainer";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const RequestsPage = () => {

    const RequestsPaper = (props) => {
        return (
            <>
                <Typography variant={'h5'}>{props.title}</Typography>
                <Table size="small" sx={{ maxHeight: 100 }}>
                    <TableBody>
                        {[1, 2, 3, 4, 5, 6].map((row) => (
                            <TableRow key={row} hover>
                                <TableCell component="th" scope="row" sx={{ border: 'none' }}>
                                    Второй межнурадный нефтегазовый молодежный форум
                                </TableCell>
                                <TableCell sx={{ border: 'none' }}>
                                    21.08.2021
                                </TableCell>
                                <TableCell style={{ width: 200, border: 'none' }} align="right">
                                    <Paper variant={'outlined'} sx={{ p: 0.5, textAlign: "center" }}>
                                        мода и искусство
                                    </Paper>
                                </TableCell>
                                <TableCell style={{ width: 160, border: 'none' }} align="right">
                                    <ArrowForwardIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }

    return (
        <PageContainer>
            <Typography variant={'h5'}>Мои заявки</Typography>
            <Accordion variant={'outlined'} sx={{ mt: 1, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant={'h6'}>Заявки на резидентство</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RequestsPaper />
                </AccordionDetails>
            </Accordion>
            <Accordion variant={'outlined'} sx={{ mt: 1, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant={'h6'}>Заявки на временное резидентство</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RequestsPaper />
                </AccordionDetails>
            </Accordion>
        </PageContainer>
)}
