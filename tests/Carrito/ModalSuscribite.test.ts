import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test('(B2C-TC-1117) Verificar que al clickear la X del modal ModalSuscribite el modal se cierra correctamente', async ({modalSuscribite}) => {

    await test.step('Clickear la X del modal ModalSuscribite', async () => {
        await modalSuscribite.clickXModalSuscribite()
    })

})