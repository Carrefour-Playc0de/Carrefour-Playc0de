import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPapasFritasSnacksMaiz extends BasePage {

    readonly PAPAS_FRITAS_SNACKS_MAIZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAPAS_FRITAS_SNACKS_MAIZ = this.page.locator('//a [@id="menu-item-category-papas-fritas-snacks-maiz"]')
    }

    async clickAlmacenPapasFritasSnacksMaiz(): Promise<void> {
        await this.click(this.PAPAS_FRITAS_SNACKS_MAIZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPapasFritasSnacksMaiz(): Promise<void> {
        await this.clickAlmacenPapasFritasSnacksMaiz()
    }
}
