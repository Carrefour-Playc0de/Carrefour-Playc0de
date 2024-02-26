import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeChupetesMamaderasAccesorios extends BasePage {

    readonly CHUPETES_MAMADERAS_ACCESORIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CHUPETES_MAMADERAS_ACCESORIOS = this.page.locator('//a [@id="menu-item-category-chupetes-mamaderas-accesorios"]')
    }

    async clickMundoBebeChupetesMamaderasAccesorios(): Promise<void> {
        await this.click(this.CHUPETES_MAMADERAS_ACCESORIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeChupetesMamaderasAccesorios(): Promise<void> {
        await this.clickMundoBebeChupetesMamaderasAccesorios()
    }
}
